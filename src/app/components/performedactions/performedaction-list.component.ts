import {Component, OnInit} from '@angular/core';
import {AbstractListComponent} from '../../common/abstract-list-component';
import {ActivatedRoute, Router} from '@angular/router';
import {PerformedAction} from '../../model/performed.action';
import {PerformedActionService} from '../../service/performed.action.service';

@Component({
    selector: 'app-tag-list',
    templateUrl: './performedaction-list.component.html'
})
export class PerformedactionListComponent extends AbstractListComponent<PerformedAction> implements OnInit {

    public labels = {};

    constructor(
        router: Router,
        private performedActionService: PerformedActionService,
        protected route: ActivatedRoute
    ) {
        super(router, performedActionService, 'performedactions');
    }

    ngOnInit(): void {
    }

    getId() {
        return this.element.uuid;
    }
}
