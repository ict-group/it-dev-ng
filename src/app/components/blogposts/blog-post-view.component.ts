import {Component} from '@angular/core';
import {BlogPost} from '../../model/blog.post';
import {ActivatedRoute, Router} from '@angular/router';
import {BlogPostService} from '../../service/blog-post.service';
import {AbstractViewComponent} from '../../common/abstract-view-component';
import {AttachmentService} from '../../service/attachment.service';
import {Attachment} from '../../model/attachment';
import {map} from "rxjs/operators";
import {ATTACHMENTS_DOWNLOAD_PATH} from "../../constants/constants";

@Component({
    selector: 'app-blog-post-view',
    templateUrl: './blog-post-view.component.html'
})
export class BlogPostViewComponent extends AbstractViewComponent<BlogPost> {

    list: Attachment[] = [];

    constructor(
        router: Router,
        private blogPostService: BlogPostService,
        private attachmentService: AttachmentService,
        protected route: ActivatedRoute
    ) {
        super(router, route, blogPostService, 'blogposts');
    }

    postFind() {
        this.attachmentService.buildSearch();
        this.attachmentService.search.obj.external_type = 'blogposts';
        this.attachmentService.search.obj.external_uuid = this.element.uuid;
        this.attachmentService.getList().subscribe(
            result => this.list = result
        );

        this.attachmentService.getAllList()
            .pipe(
                map(allegati => allegati.map(attachment => ({
                    ...attachment,
                    s3_url: ATTACHMENTS_DOWNLOAD_PATH(attachment.uuid)
                }) as Attachment))
            ).subscribe(result => {
            this.list = result;
        });
    }

    getId() {
        return this.element.uuid;
    }
}
