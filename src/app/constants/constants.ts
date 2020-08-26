import {environment} from '../../environments/environment';

export const ALERT_CONFIGURATIONS_PATH = environment.apiUrl + 'alertconfigurations';
export const ALERT_NOTIFICATIONS_PATH = environment.apiUrl + 'alertnotifications';
export const DEVICES_PATH = environment.apiUrl + 'devices';
export const DEVICE_CONFIGURATIONS_PATH = environment.apiUrl + 'deviceconfigurations';
export const DEVICE_EVENTS_PATH = environment.apiUrl + 'deviceevents';
export const FAULT_MANAGEMENTS_PATH = environment.apiUrl + 'faultmangements';
export const LAST_DEVICE_EVENTS_PATH = environment.apiUrl + 'lastdeviceevents';
export const SYSTEM_EVENT_LOGS_PATH = environment.apiUrl + 'systemeventlogs';
export const END_USERS_PATH = environment.apiUrl + 'endusers';

export const PAGES = [
  {name: 'Alert Configurations', link: '/alertconfigurations', icon: 'fa fa-exclamation-triangle', style: 'default'},
  {name: 'Alert Notifications', link: '/alertnotifications', icon: 'fa fa-envelope-o', style: 'default'},
  {name: 'Devices', link: '/devices', icon: 'fa fa-tablet', style: 'default'},
  {name: 'Device Configurations', link: '/deviceconfigurations', icon: 'fa fa-id-card-o', style: 'default'},
  {name: 'Fault Mangements', link: '/faultmangements', icon: 'fa fa-user-md', style: 'default'},
  {name: 'Last Device Events', link: '/lastdeviceevents', icon: 'fa fa-calendar', style: 'default'},
  {name: 'System Event Logs', link: '/systemeventlogs', icon: 'fa fa-stack-exchange', style: 'default'},
  {name: 'End Users', link: '/endusers', icon: 'fa fa-users', style: 'default'},
];


