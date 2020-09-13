import {Component} from '@angular/core';
import {BlogPost} from "../../model/blog.post";
import {ActivatedRoute, Router} from "@angular/router";
import {BlogPostService} from "../../service/blog-post.service";
import {AbstractViewComponent} from "../../common/abstract-view-component";
import {Project} from "../../model/project";
import {ProjectService} from "../../service/project.service";

@Component({
    selector: 'app-project-view',
    templateUrl: './project-view.component.html'
})
export class ProjectViewComponent extends AbstractViewComponent<Project> {

    constructor(
        router: Router,
        private projectService: ProjectService,
        protected route: ActivatedRoute
    ) {
        super(router, route, projectService, 'projects');
    }

    getId() {
        return this.element.uuid;
    }
}
