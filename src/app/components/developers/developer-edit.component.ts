import {Component, ViewChild} from '@angular/core';
import {AbstractEditComponent} from '../../common/abstract-edit-component';
import {Developer} from '../../model/developer';
import {DeveloperService} from '../../service/developer.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ConfirmationService, FileUpload} from 'primeng';
import {Attachment} from '../../model/attachment';
import {AttachmentService} from '../../service/attachment.service';
import {ATTACHMENTS_DOWNLOAD_PATH} from '../../constants/constants';

@Component({
    selector: 'app-developer-edit',
    templateUrl: './developer-edit.component.html'
})
export class DeveloperEditComponent extends AbstractEditComponent<Developer> {

    tagsArray: string[];
    companiesArray: string[];
    @ViewChild('fileInput', {static: false}) fileInput: FileUpload;

    constructor(
        router: Router,
        private developerService: DeveloperService,
        private attachmentService: AttachmentService,
        protected route: ActivatedRoute,
        private confirmationService: ConfirmationService
    ) {
        super(router, route, developerService, 'developers');
    }

    initArrays() {
        if (this.element.tags) {
            this.tagsArray = this.element.tags.split(',');
        }
        if (this.element.companies) {
            this.companiesArray = this.element.companies.split(';');
        }
    }

    reverseArray() {
        if (this.tagsArray) {
            this.element.tags = this.tagsArray.join(',');
        }
        if (this.companiesArray) {
            this.element.companies = this.companiesArray.join(';');
        }
    }


    postFind() {
        this.initArrays();
    }



    getId() {
        return this.element.uuid;
    }

    createInstance(): Developer {
        return new Developer();
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

    onFileSelect(event) {
        console.log(event.files[0]);
    }

    onFileUpload(event) {
        console.log(event.files[0]);
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
            const file = this.fileInput._files[0];
            const attachment: Attachment = new Attachment();
            attachment.name = file.name;
            attachment.mime_type = file.type;
            attachment.size = file.size;
            attachment.external_uuid = this.element.uuid;
            attachment.external_type = 'developers';
            this.attachmentService.uploadFile(attachment, file).subscribe(
                result => {
                    this.element.photo_url = ATTACHMENTS_DOWNLOAD_PATH(result.uuid);
                    this.service.update(this.element).subscribe(
                        uuup => console.log(uuup)
                    );
                }
            );
        }
    }
}
