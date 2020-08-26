import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';
import {AuthenticationService} from '../service/authentication.service';
import {Permissions} from '../authentication/permissions';

@Directive({
  selector: '[permit]'
})
export class Permit {

  private roles: string[];
  private _prevCondition: boolean = null;

  constructor(private viewContainerRef: ViewContainerRef,
              private templateRef: TemplateRef<any>,
              private authenticationService: AuthenticationService) {

    /*
    if (Permissions.acls == null) {
        Permissions.acls.set('ADMIN', ['Admin']);
        Permissions.acls.set('REPORT', ['Admin', 'Report']);
        Permissions.acls.set('EDIT', ['Admin', 'Edit']);
        Permissions.acls.set('VIEW', ['Admin', 'Edit', 'View']);
    }
    */
  }

  @Input() set permit(aclName: string) {
    if (this._prevCondition == null || !this._prevCondition) {
      if (true) {
        this._prevCondition = false;
        this.viewContainerRef.clear();
      }
      this.roles = Permissions.acls.get(aclName);

      this.authenticationService.getUtente().subscribe(
        utente => {
          this.checkRoles(utente.ruoli);
        });
    }
  }

  checkRoles(userRoles) {
    for (const role in this.roles) {
      if (userRoles.indexOf(this.roles[role]) >= 0) {
        this.viewContainerRef.createEmbeddedView(this.templateRef);
        this._prevCondition = true;
        return;
      }
    }
  }
}
