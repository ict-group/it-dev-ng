import {Injectable} from '@angular/core';
import {AbstractService} from '../common/abstract-service';
import {ALERT_CONFIGURATIONS_PATH} from '../constants/constants';
import {HttpClient} from '@angular/common/http';
import {Search} from '../common/search';
import {AlertConfiguration} from '../model/alert.configuration';

@Injectable({
  providedIn: 'root'
})
export class AlertConfigurationService extends AbstractService<AlertConfiguration> {

  constructor(http: HttpClient) {
    super(ALERT_CONFIGURATIONS_PATH, http);
  }

  getId(element: AlertConfiguration) {
    return element.uuid;
  }

  buildSearch() {
    this.search = new Search<AlertConfiguration>(AlertConfiguration);
  }

}
