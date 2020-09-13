import {Component} from '@angular/core';
import {AbstractEditComponent} from "../../common/abstract-edit-component";
import {BlogPost} from "../../model/blog.post";
import {BlogPostService} from "../../service/blog-post.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ConfirmationService} from "primeng";

@Component({
    selector: 'app-blog-post-edit',
    templateUrl: './blog-post-edit.component.html'
})
export class BlogPostEditComponent extends AbstractEditComponent<BlogPost> {

    constructor(
        router: Router,
        private blogPostService: BlogPostService,
        protected route: ActivatedRoute,
        private confirmationService: ConfirmationService
    ) {
        super(router, route, blogPostService, 'blogposts');
    }

    getId() {
        return this.element.uuid;
    }

    createInstance(): BlogPost {
        return new BlogPost();
    }

    public confirmDelete() {
        this.confirmationService.confirm({
            message: 'Confermi la eliminazione?',
            header: 'Attenzione!',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.delete();
            },
            reject: () => {
            }
        });
    }

}
