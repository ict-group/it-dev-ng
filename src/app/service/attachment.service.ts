import {Injectable} from '@angular/core';
import {AbstractService} from '../common/abstract-service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Search} from '../common/search';
import {ATTACHMENTS_PATH} from '../constants/constants';
import {Attachment} from '../model/attachment';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AttachmentService extends AbstractService<Attachment> {

    constructor(private http: HttpClient) {
        super(ATTACHMENTS_PATH, http);
    }

    getId(element: Attachment) {
        return element.uuid;
    }

    buildSearch() {
        this.search = new Search<Attachment>(Attachment);
    }

    uploadFile(attachment: Attachment, blob: any): Observable<Attachment> {
        const formData: FormData = new FormData();
        formData.append('file', blob);
        formData.append('mime_type', attachment.mime_type);
        formData.append('name', attachment.name);
        formData.append('external_type', attachment.external_type);
        formData.append('external_uuid', attachment.external_uuid);
        const requestOptions = {
            headers: new HttpHeaders({
                origin: 'x-requested-with',
            })
        };
        return this.http.post<Attachment>(ATTACHMENTS_PATH, formData, requestOptions);
    }
}
