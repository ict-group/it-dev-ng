import {Component} from '@angular/core';
import {AbstractViewComponent} from '../../common/abstract-view-component';
import {ActivatedRoute, Router} from '@angular/router';
import {Action} from '../../model/action';
import {ActionService} from '../../service/action.service';

@Component({
    selector: 'app-action-view',
    templateUrl: './action-view.component.html'
})
export class ActionViewComponent extends AbstractViewComponent<Action> {

    constructor(
        router: Router,
        private actionService: ActionService,
        protected route: ActivatedRoute
    ) {
        super(router, route, actionService, 'actions');
    }

    getId() {
        return this.element.uuid;
    }
}
