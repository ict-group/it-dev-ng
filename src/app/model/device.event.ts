import {DeviceEventStatus} from './device.event.status';

export class DeviceEvent {
  public uuid: string;
  public active = true;
  public device_uuid: string;
  public createdDateTime: string;
  public queuedDateTime: string;
  public executionDateTime: string;
  public timeoutDateTime: string;
  public status: DeviceEventStatus;
  public method: string;
  public json_object: any;

  constructor() {
  }
}
