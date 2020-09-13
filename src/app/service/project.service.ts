import {Injectable} from '@angular/core';
import {AbstractService} from '../common/abstract-service';
import {PROJECTS_PATH} from '../constants/constants';
import {HttpClient} from '@angular/common/http';
import {Search} from '../common/search';
import {Project} from '../model/project';

@Injectable({
    providedIn: 'root'
})
export class ProjectService extends AbstractService<Project> {

    constructor(http: HttpClient) {
        super(PROJECTS_PATH, http);
    }

    getId(element: Project) {
        return element.uuid;
    }

    buildSearch() {
        this.search = new Search<Project>(Project);
    }

}
