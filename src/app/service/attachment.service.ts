import {Injectable} from '@angular/core';
import {AbstractService} from '../common/abstract-service';
import {HttpClient} from '@angular/common/http';
import {Search} from '../common/search';
import {ATTACHMENTS_PATH} from '../constants/constants';
import {Attachment} from '../model/attachment';

@Injectable({
    providedIn: 'root'
})
export class AttachmentService extends AbstractService<Attachment> {

    constructor(http: HttpClient) {
        super(ATTACHMENTS_PATH, http);
    }

    getId(element: Attachment) {
        return element.uuid;
    }

    buildSearch() {
        this.search = new Search<Attachment>(Attachment);
    }

}
