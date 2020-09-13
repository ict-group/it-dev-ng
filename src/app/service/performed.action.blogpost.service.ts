import {Injectable} from '@angular/core';
import {AbstractService} from '../common/abstract-service';
import {PERFORMED_ACTIONS_BLOGPOSTS_PATH} from '../constants/constants';
import {HttpClient} from '@angular/common/http';
import {Search} from '../common/search';
import {PerformedActionBlogPost} from '../model/performed.action.blogpost';

@Injectable({
    providedIn: 'root'
})
export class PerformedActionBlogpostService extends AbstractService<PerformedActionBlogPost> {

    constructor(http: HttpClient) {
        super(PERFORMED_ACTIONS_BLOGPOSTS_PATH, http);
    }

    getId(element: PerformedActionBlogPost) {
        return element.uuid;
    }

    buildSearch() {
        this.search = new Search<PerformedActionBlogPost>(PerformedActionBlogPost);
    }

}
