import {Injectable} from '@angular/core';
import {AbstractService} from '../common/abstract-service';
import {DEVICE_EVENTS_PATH} from '../constants/constants';
import {HttpClient} from '@angular/common/http';
import {Search} from '../common/search';
import {DeviceEvent} from '../model/device.event';

@Injectable({
  providedIn: 'root'
})
export class DeviceEventService extends AbstractService<DeviceEvent> {

  constructor(http: HttpClient) {
    super(DEVICE_EVENTS_PATH, http);
  }

  getId(element: DeviceEvent) {
    return element.uuid;
  }

  buildSearch() {
    this.search = new Search<DeviceEvent>(DeviceEvent);
  }

}
