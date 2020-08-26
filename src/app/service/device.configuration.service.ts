import {Injectable} from '@angular/core';
import {AbstractService} from '../common/abstract-service';
import {Device} from '../model/device';
import {DEVICE_CONFIGURATIONS_PATH} from '../constants/constants';
import {HttpClient} from '@angular/common/http';
import {Search} from '../common/search';

@Injectable({
  providedIn: 'root'
})
export class DeviceService extends AbstractService<Device> {

  constructor(http: HttpClient) {
    super(DEVICE_CONFIGURATIONS_PATH, http);
  }

  getId(element: Device) {
    return element.uuid;
  }

  buildSearch() {
    this.search = new Search<Device>(Device);
  }

}
