export class Device {
  public uuid: string;
  public active = true;
  public user_uuid: string;
  public user_tax_code: string;
  public device_configuration_uuid: string;
  public lat: number;
  public lon: number;
  public name: string;
  public description: string;
  public tags: string;
  public ble_code1: string;
  public ble_code2: string;
  public ble_code3: string;
  public ble_code4: string;
  public ble_code5: string;
  public alert_configuration_uuid: string;
  public fault_management_uuids: string;
  public disable_alert: boolean;
  public disable_alert_date: string;
  public creation_date: string;
  public lastupdate_date: string;
  public note: string;

  constructor() {
  }
}
