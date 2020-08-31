import {environment} from '../../environments/environment';

export const DEVICES_PATH = environment.apiUrl + 'devices';

export const PAGES = [
  {name: 'Devices', link: '/devices', icon: 'fa fa-tablet', style: 'default'},
  {name: 'End Users', link: '/endusers', icon: 'fa fa-users', style: 'default'},
];


