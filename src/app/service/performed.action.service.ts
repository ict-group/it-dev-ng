import {Injectable} from '@angular/core';
import {AbstractService} from '../common/abstract-service';
import {PERFORMED_ACTIONS_PATH} from '../constants/constants';
import {HttpClient} from '@angular/common/http';
import {Search} from '../common/search';
import {PerformedAction} from '../model/performed.action';

@Injectable({
    providedIn: 'root'
})
export class PerformedActionService extends AbstractService<PerformedAction> {

    constructor(http: HttpClient) {
        super(PERFORMED_ACTIONS_PATH, http);
    }

    getId(element: PerformedAction) {
        return element.uuid;
    }

    buildSearch() {
        this.search = new Search<PerformedAction>(PerformedAction);
    }

}
