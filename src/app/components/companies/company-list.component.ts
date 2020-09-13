import {Component, OnInit} from '@angular/core';
import {AbstractListComponent} from '../../common/abstract-list-component';
import {ActivatedRoute, Router} from '@angular/router';
import {Tag} from '../../model/tag';
import {TagService} from '../../service/tag.service';
import {Company} from '../../model/company';
import {CompanyService} from '../../service/company.service';

@Component({
    selector: 'app-tag-list',
    templateUrl: './company-list.component.html'
})
export class CompanyListComponent extends AbstractListComponent<Company> implements OnInit {

    public labels = {};

    constructor(
        router: Router,
        private companyService: CompanyService,
        protected route: ActivatedRoute
    ) {
        super(router, companyService, 'companies');
    }

    ngOnInit(): void {
    }

    getId() {
        return this.element.uuid;
    }
}
