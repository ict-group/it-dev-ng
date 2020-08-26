import {Injectable} from '@angular/core';
import {AbstractService} from '../common/abstract-service';
import {FAULT_MANAGEMENTS_PATH} from '../constants/constants';
import {HttpClient} from '@angular/common/http';
import {Search} from '../common/search';
import {FaultManagement} from '../model/fault.management';

@Injectable({
  providedIn: 'root'
})
export class DeviceService extends AbstractService<FaultManagement> {

  constructor(http: HttpClient) {
    super(FAULT_MANAGEMENTS_PATH, http);
  }

  getId(element: FaultManagement) {
    return element.uuid;
  }

  buildSearch() {
    this.search = new Search<FaultManagement>(FaultManagement);
  }

}
