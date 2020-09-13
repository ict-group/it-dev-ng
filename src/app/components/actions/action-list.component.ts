import {Component, OnInit} from '@angular/core';
import {AbstractListComponent} from '../../common/abstract-list-component';
import {ActivatedRoute, Router} from '@angular/router';
import {Action} from '../../model/action';
import {ActionService} from '../../service/action.service';

@Component({
    selector: 'app-developer-list',
    templateUrl: './action-list.component.html'
})
export class ActionListComponent extends AbstractListComponent<Action> implements OnInit {

    public labels = {};

    constructor(
        router: Router,
        private actionService: ActionService,
        protected route: ActivatedRoute
    ) {
        super(router, actionService, 'actions');
    }

    ngOnInit(): void {
    }

    getId() {
        return this.element.uuid;
    }
}
