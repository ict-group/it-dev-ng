import {Component} from '@angular/core';
import {AbstractEditComponent} from '../../common/abstract-edit-component';
import {Developer} from '../../model/developer';
import {DeveloperService} from '../../service/developer.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ConfirmationService} from 'primeng';
import {Action} from '../../model/action';
import {ActionService} from '../../service/action.service';

@Component({
    selector: 'app-developer-edit',
    templateUrl: './action-edit.component.html'
})
export class ActionEditComponent extends AbstractEditComponent<Action> {

    constructor(
        router: Router,
        private actionService: ActionService,
        protected route: ActivatedRoute,
        private confirmationService: ConfirmationService
    ) {
        super(router, route, actionService, 'actions');
    }

    getId() {
        return this.element.uuid;
    }

    createInstance(): Action {
        return new Action();
    }

    public confirmDelete() {
        this.confirmationService.confirm({
            message: 'Confermi la eliminazione?',
            header: 'Attenzione!',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.delete();
            },
            reject: () => {
            }
        });
    }

    onFileSelect(event) {
        console.log(event.files[0])
    }

    onFileUpload(event) {
        console.log(event.files[0])
    }
}
