import {Component, OnInit} from '@angular/core';
import {AbstractListComponent} from '../../common/abstract-list-component';
import {ActivatedRoute, Router} from '@angular/router';
import {PerformedActionBlogPost} from '../../model/performed.action.blogpost';
import {PerformedActionBlogpostService} from '../../service/performed.action.blogpost.service';

@Component({
    selector: 'app-tag-list',
    templateUrl: './performedactionsblogpost-list.component.html'
})
export class PerformedactionsblogpostListComponent extends AbstractListComponent<PerformedActionBlogPost> implements OnInit {

    public labels = {};

    constructor(
        router: Router,
        private performedActionService: PerformedActionBlogpostService,
        protected route: ActivatedRoute
    ) {
        super(router, performedActionService, 'performedactionsblogpost');
    }

    ngOnInit(): void {
    }

    getId() {
        return this.element.uuid;
    }
}
