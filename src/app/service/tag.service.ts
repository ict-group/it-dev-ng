import {Injectable} from '@angular/core';
import {AbstractService} from '../common/abstract-service';
import {HttpClient} from '@angular/common/http';
import {Search} from '../common/search';
import {Tag} from '../model/tag';
import {TAGS_PATH} from '../constants/constants';

@Injectable({
  providedIn: 'root'
})
export class TagService extends AbstractService<Tag> {

  constructor(http: HttpClient) {
    super(TAGS_PATH, http);
  }

  getId(element: Tag) {
    return element.uuid;
  }

  buildSearch() {
    this.search = new Search<Tag>(Tag);
  }

}
