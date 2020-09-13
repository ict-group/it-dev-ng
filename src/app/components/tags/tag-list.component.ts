import {Component, OnInit} from '@angular/core';
import {AbstractListComponent} from '../../common/abstract-list-component';
import {ActivatedRoute, Router} from '@angular/router';
import {Tag} from '../../model/tag';
import {TagService} from '../../service/tag.service';

@Component({
    selector: 'app-tag-list',
    templateUrl: './tag-list.component.html'
})
export class TagListComponent extends AbstractListComponent<Tag> implements OnInit {

    public labels = {};

    constructor(
        router: Router,
        private tagService: TagService,
        protected route: ActivatedRoute
    ) {
        super(router, tagService, 'tags');
    }

    ngOnInit(): void {
    }

    getId() {
        return this.element.uuid;
    }
}
