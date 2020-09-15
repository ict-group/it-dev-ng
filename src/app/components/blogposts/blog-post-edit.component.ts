import {Component, ViewChild} from '@angular/core';
import {AbstractEditComponent} from '../../common/abstract-edit-component';
import {BlogPost} from '../../model/blog.post';
import {BlogPostService} from '../../service/blog-post.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ConfirmationService, FileUpload, SelectItem} from 'primeng';
import {BLOG_TYPES} from '../../constants/constants';
import {DeveloperService} from '../../service/developer.service';
import {Attachment} from '../../model/attachment';
import {AttachmentService} from '../../service/attachment.service';

@Component({
    selector: 'app-blog-post-edit',
    templateUrl: './blog-post-edit.component.html'
})
export class BlogPostEditComponent extends AbstractEditComponent<BlogPost> {

    types: SelectItem[];
    tagsArray: string[];
    developersItems: SelectItem[] = [];
    @ViewChild('fileInput', {static: false}) fileInput: FileUpload;

    constructor(
        router: Router,
        private blogPostService: BlogPostService,
        private developerService: DeveloperService,
        private attachmentService: AttachmentService,
        protected route: ActivatedRoute,
        private confirmationService: ConfirmationService
    ) {
        super(router, route, blogPostService, 'blogposts');
        this.types = BLOG_TYPES;
        this.developerService.getAllList().subscribe(
            developer => {
                for (const dev of developer) {
                    this.developersItems.push({label: dev.name, value: dev.uuid});
                }
            }
        );
    }

    initArrays() {
        if (this.element.tags) {
            this.tagsArray = this.element.tags.split(',');
        }
    }

    reverseArray() {
        if (this.tagsArray) {
            this.element.tags = this.tagsArray.join(',');
        }
    }

    getId() {
        return this.element.uuid;
    }

    postFind() {
        this.initArrays();
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

    preSave(): boolean {
        this.reverseArray();
        return true;
    }

    preUpdate(): boolean {
        this.reverseArray();
        return true;
    }


    postSave() {
        this.upload();
    }

    postUpdate() {
        this.upload();
    }

    upload() {
        if (this.fileInput.hasFiles()) {
            for (const file of this.fileInput._files) {
                const attachment: Attachment = new Attachment();
                attachment.name = file.name;
                attachment.mime_type = file.type;
                attachment.size = file.size;
                attachment.external_uuid = this.element.uuid;
                attachment.external_type = 'blogposts';
                this.attachmentService.uploadFile(attachment, file).subscribe(
                    result => console.log(result)
                );
            }
        }
    }
}
