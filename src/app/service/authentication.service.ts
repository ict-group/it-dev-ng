import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {from, Observable, of} from 'rxjs';

import {UserAuth} from '../model/userauth';
import {KeycloakService} from 'keycloak-angular';

@ Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  public utente: UserAuth;

  private token: any;

  // messo a true permette accesso ad app anche escludendo il cas filter... almeno per far partire le pagine ng
  deepFake = false;

  constructor(private httpClient: HttpClient, private keycloakService: KeycloakService) {
    if (this.deepFake) {
      this.utente = new UserAuth();
      this.utente.ruoli = ['ADMIN', 'Admin'];
    }
  }

  getUtente(): Observable<UserAuth> {
    return from(this.getUtenteAsync());
  }

  async getUtenteAsync(): Promise<UserAuth> {
    if (this.utente != null) {
      return of(this.utente).toPromise();
    }
    if (await this.keycloakService.isLoggedIn()) {
      const userDetails = await this.keycloakService.loadUserProfile();
      const roles = this.keycloakService.getUserRoles();
      this.utente = new UserAuth();
      this.utente.nome = userDetails.firstName + ' ' + userDetails.lastName;
      this.utente.ruoli = roles;
      return of(this.utente).toPromise();
    } else {
      console.log('not logged in');
    }
  }

  public logout() {
    this.keycloakService.logout();
    this.token = undefined;
    this.utente = undefined;
  }


  public handleError(error: Response): Observable<any> {
    if (error == null) {
      return Observable.throw('Server error');
    }
    console.error(error);
    if (error.status === 403) {
      return Observable.throw('Forbidden');
    }
    return Observable.throw(error.json()['error'] || 'Server error');
  }
}
