import {Component, OnInit} from '@angular/core';
import {AbstractListComponent} from "../../common/abstract-list-component";
import {BlogPost} from "../../model/blog.post";
import {BlogPostService} from "../../service/blog-post.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: 'app-blog-post-list',
    templateUrl: './blog-post-list.component.html'
})
export class BlogPostListComponent extends AbstractListComponent<BlogPost> implements OnInit {

    public hiddenFields: string[] = ['sequenza_stati'];
    public labels = {};

    constructor(
        router: Router,
        private blogPostService: BlogPostService,
        protected route: ActivatedRoute
    ) {
        super(router, blogPostService, 'blogposts');
    }

    ngOnInit(): void {
    }

    getId() {
        return this.element.uuid;
    }
}
