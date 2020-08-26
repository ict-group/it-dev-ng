import { Component, OnInit } from '@angular/core';
import {AbstractListComponent} from '../../common/abstract-list-component';
import {Device} from '../../model/device';
import {DeviceService} from '../../service/device.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-device',
  templateUrl: './device-list.component.html',
})
export class DeviceListComponent extends AbstractListComponent<Device> implements OnInit {

  public hiddenFields: string[] = ['sequenza_stati'];
  public labels = {
    // 'nome' : 'come diavolo si chiama',
    // 'sequenza_stati' : 'la sequenza degli stati'
  };

  constructor(
    router: Router,
    private deviceService: DeviceService,
    protected route: ActivatedRoute
  ) {
    super(router, deviceService, 'devices');
  }

  ngOnInit(): void {
  }

  getId() {
    return this.element.uuid;
  }

}
