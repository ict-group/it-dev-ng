import {Component} from '@angular/core';
import {AbstractEditComponent} from '../../common/abstract-edit-component';
import {Device} from '../../model/device';
import {DeviceService} from '../../service/device.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ConfirmationService, SelectItem} from 'primeng';

@Component({
  selector: 'app-device-edit',
  templateUrl: './device-edit.component.html',
})
export class DeviceEditComponent extends AbstractEditComponent<Device> {

  public iotconfigurations: SelectItem[] = [];

  constructor(
    router: Router,
    private deviceService: DeviceService,
    protected route: ActivatedRoute,
    private confirmationService: ConfirmationService
  ) {
    super(router, route, deviceService, 'devices');
  }

  getId() {
    return this.element.uuid;
  }

  createInstance(): Device {
    return new Device();
  }

  public confirmDelete() {
    this.confirmationService.confirm({
      message: 'Confermi la eliminazione?',
      header: 'Attenzione!',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.delete();
      },
      reject: () => {
      }
    });
  }

}
