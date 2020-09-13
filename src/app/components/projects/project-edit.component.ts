import {Component} from '@angular/core';
import {AbstractEditComponent} from '../../common/abstract-edit-component';
import {ActivatedRoute, Router} from '@angular/router';
import {ConfirmationService} from 'primeng';
import {Project} from '../../model/project';
import {ProjectService} from '../../service/project.service';

@Component({
    selector: 'app-project-edit',
    templateUrl: './project-edit.component.html'
})
export class ProjectEditComponent extends AbstractEditComponent<Project> {

    constructor(
        router: Router,
        private projectService: ProjectService,
        protected route: ActivatedRoute,
        private confirmationService: ConfirmationService
    ) {
        super(router, route, projectService, 'projects');
    }

    getId() {
        return this.element.uuid;
    }

    createInstance(): Project {
        return new Project();
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

}
