import {Injectable} from '@angular/core';
import {AbstractService} from '../common/abstract-service';
import {HttpClient} from '@angular/common/http';
import {Search} from '../common/search';
import {COMPANIES_PATH} from '../constants/constants';
import {Company} from '../model/company';

@Injectable({
    providedIn: 'root'
})
export class CompanyService extends AbstractService<Company> {

    constructor(http: HttpClient) {
        super(COMPANIES_PATH, http);
    }

    getId(element: Company) {
        return element.uuid;
    }

    buildSearch() {
        this.search = new Search<Company>(Company);
    }
}
