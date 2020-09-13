import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AbstractService} from '../common/abstract-service';
import {Developer} from '../model/developer';
import {DEVELOPERS_PATH} from '../constants/constants';
import {Search} from '../common/search';


@Injectable({
    providedIn: 'root'
})
export class DeveloperService extends AbstractService<Developer> {

    constructor(http: HttpClient) {
        super(DEVELOPERS_PATH, http);
    }

    getId(element: Developer) {
        return element.uuid;
    }

    buildSearch() {
        this.search = new Search<Developer>(Developer);
    }
}
