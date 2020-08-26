import {Injectable} from '@angular/core';
import {AbstractService} from '../common/abstract-service';
import {SYSTEM_EVENT_LOGS_PATH} from '../constants/constants';
import {HttpClient} from '@angular/common/http';
import {Search} from '../common/search';
import {SystemEventLog} from '../model/system.event.log';

@Injectable({
  providedIn: 'root'
})
export class SystemEventLogService extends AbstractService<SystemEventLog> {

  constructor(http: HttpClient) {
    super(SYSTEM_EVENT_LOGS_PATH, http);
  }

  getId(element: SystemEventLog) {
    return element.uuid;
  }

  buildSearch() {
    this.search = new Search<SystemEventLog>(SystemEventLog);
  }

}
