import {Injectable} from '@angular/core';
import {AbstractService} from '../common/abstract-service';
import {ALERT_NOTIFICATIONS_PATH} from '../constants/constants';
import {HttpClient} from '@angular/common/http';
import {Search} from '../common/search';
import {AlertNotification} from '../model/alert.notification';

@Injectable({
  providedIn: 'root'
})
export class AlertNotificationService extends AbstractService<AlertNotification> {

  constructor(http: HttpClient) {
    super(ALERT_NOTIFICATIONS_PATH, http);
  }

  getId(element: AlertNotification) {
    return element.uuid;
  }

  buildSearch() {
    this.search = new Search<AlertNotification>(AlertNotification);
  }

}
