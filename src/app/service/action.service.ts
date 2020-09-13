import {Injectable} from '@angular/core';
import {AbstractService} from '../common/abstract-service';
import {HttpClient} from '@angular/common/http';
import {Search} from '../common/search';
import {Action} from '../model/action';
import {ACTIONS_PATH} from '../constants/constants';

@Injectable({
    providedIn: 'root'
})
export class ActionService extends AbstractService<Action> {

    constructor(http: HttpClient) {
        super(ACTIONS_PATH, http);
    }

    getId(element: Action) {
        return element.uuid;
    }

    buildSearch() {
        this.search = new Search<Action>(Action);
    }

}
