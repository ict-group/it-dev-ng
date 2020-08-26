import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AbstractViewComponent} from '../../common/abstract-view-component';
import {Device} from '../../model/device';
import {DeviceService} from '../../service/device.service';


@Component({
  selector: 'app-device-view',
  templateUrl: './device-view.component.html',
})
export class DeviceViewComponent extends AbstractViewComponent<Device>  {
  constructor(
    router: Router,
    private deviceService: DeviceService,
    protected route: ActivatedRoute
  ) {
    super(router, route, deviceService, 'devices');

  }

  getId() {
    return this.element.uuid;
  }


}
