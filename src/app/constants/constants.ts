import {environment} from '../../environments/environment';

export const DEVELOPERS_PATH = environment.apiUrl + '/api/v1/developers';

export const PAGES = [
  {name: 'Developers', link: '/developers', icon: 'fa fa-file-code-o', style: 'default'},
  {name: 'Blogpost', link: '/blogpost', icon: 'fa fa-picture-o', style: 'default'}
];
