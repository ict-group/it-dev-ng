import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';
import {Permissions} from '../authentication/permissions';
import {AuthenticationService} from '../service/authentication.service';

@Directive({
    selector: '[appPermit]'
})
export class PermitDirective {

    private roles: string[];
    private prevCondition: boolean = null;

    constructor(private viewContainerRef: ViewContainerRef,
                private templateRef: TemplateRef<any>,
                private authenticationService: AuthenticationService) {
    }

    @Input() set appPermit(aclName: string) {
        if (this.prevCondition == null || !this.prevCondition) {
            if (true) {
                this.prevCondition = false;
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
        for (const rolesKey in this.roles) {
            if (userRoles.indexOf(this.roles[rolesKey]) >= 0) {
                this.viewContainerRef.createEmbeddedView(this.templateRef);
                this.prevCondition = true;
                return;
            }
        }
    }
}
