import {environment} from '../../environments/environment';

export const DEVICES_PATH = environment.apiUrl + 'devices';
export const DEVELOPERS_PATH = environment.apiUrl + '/api/v1/developers';
export const BLOGPOSTS_PATH = environment.apiUrl + '/api/v1/blogposts';

export const PAGES = [
  {name: 'Developers', link: '/developers', icon: 'fa fa-file-code-o', style: 'default'},
  {name: 'Blogpost', link: '/blogposts', icon: 'fa fa-picture-o', style: 'default'},
  {name: 'Devices', link: '/devices', icon: 'fa fa-tablet', style: 'default'},
  {name: 'End Users', link: '/endusers', icon: 'fa fa-users', style: 'default'},
];


