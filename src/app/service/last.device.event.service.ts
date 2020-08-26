import {Injectable} from '@angular/core';
import {AbstractService} from '../common/abstract-service';
import {LAST_DEVICE_EVENTS_PATH} from '../constants/constants';
import {HttpClient} from '@angular/common/http';
import {Search} from '../common/search';
import {LastDeviceEvent} from '../model/last.device.event';

@Injectable({
  providedIn: 'root'
})
export class LastDeviceEventService extends AbstractService<LastDeviceEvent> {

  constructor(http: HttpClient) {
    super(LAST_DEVICE_EVENTS_PATH, http);
  }

  getId(element: LastDeviceEvent) {
    return element.uuid;
  }

  buildSearch() {
    this.search = new Search<LastDeviceEvent>(LastDeviceEvent);
  }

}
