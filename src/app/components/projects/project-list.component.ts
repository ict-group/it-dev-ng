import {Component, OnInit} from '@angular/core';
import {AbstractListComponent} from '../../common/abstract-list-component';
import {ActivatedRoute, Router} from '@angular/router';
import {Project} from '../../model/project';
import {ProjectService} from '../../service/project.service';

@Component({
    selector: 'app-project-list',
    templateUrl: './project-list.component.html'
})
export class ProjectListComponent extends AbstractListComponent<Project> implements OnInit {

    public hiddenFields: string[] = ['sequenza_stati'];
    public labels = {};

    constructor(
        router: Router,
        private projectService: ProjectService,
        protected route: ActivatedRoute
    ) {
        super(router, projectService, 'projects');
    }

    ngOnInit(): void {
    }

    getId() {
        return this.element.uuid;
    }
}
