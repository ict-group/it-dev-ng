import {Component, OnInit} from '@angular/core';
import {PAGES} from './constants/constants';
import {KeycloakService} from 'keycloak-angular';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    pages = PAGES;
    username: string;
    roles: string[];
    primaryRole: string;

    constructor(private keycloakService: KeycloakService) {
    }

    logout() {
        this.keycloakService.logout();
    }

    ngOnInit() {
        try {
            this.username = this.keycloakService.getUsername();
            this.roles = this.keycloakService.getUserRoles();
            this.setPrimaryRole();
        } catch (e) {
            console.log(e);
        }

    }

    setPrimaryRole() {
        if (this.roles) {
            if (this.roles.includes('Admin')) {
                this.primaryRole = 'Admin';
                return;
            }
            if (this.roles.includes('Manager')) {
                this.primaryRole = 'Manager';
                return;
            }
            if (this.roles.includes('User')) {
                this.primaryRole = 'User';
                return;
            }
        }
    }
}
