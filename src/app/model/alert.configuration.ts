export class AlertConfiguration {
  public uuid: string;
  public active = true;
  public num_hours_from_last_event: number;
  public typology: string;
  public title: string;
  public body: string;

  constructor() {
  }
}
