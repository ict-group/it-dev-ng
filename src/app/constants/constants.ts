import {environment} from '../../environments/environment';

export const API_PATH = environment.apiUrl + '/api/v1';
export const ATTACHMENTS_PATH = API_PATH + '/attachments';
export const ACTIONS_PATH = API_PATH + '/actions';
export const BLOGPOSTS_PATH = API_PATH + '/blogposts';
export const COMPANIES_PATH = API_PATH + '/companies';
export const DEVELOPERS_PATH = API_PATH + '/developers';
export const PERFORMED_ACTIONS_PATH = API_PATH + '/performed-actions';
export const PERFORMED_ACTIONS_BLOGPOSTS_PATH = API_PATH + '/performed-actions-blogpost';
export const PROJECTS_PATH = API_PATH + '/projects';
export const USERS_PATH = API_PATH + '/users';
export const TAGS_PATH = API_PATH + '/tags';


// USER ROLES
export const ADMIN_ROLE = 'admin';
export const MANAGER_ROLE = 'manager';
export const USER_ROLE = 'user';

export const PAGES = [
    {name: 'Actions', link: '/actions', icon: 'fa fa-file-code-o', style: 'default'},
    {name: 'Developers', link: '/developers', icon: 'fa fa-file-code-o', style: 'default'},
    {name: 'Blogposts', link: '/blogposts', icon: 'fa fa-picture-o', style: 'default'},
    {name: 'Companies', link: '/companies', icon: 'fa fa-address-book', style: 'default'},
    {name: 'Performed Actions', link: '/performedactions', icon: 'fa fa-bars', style: 'default'},
    {name: 'Performed Actions Blogpost', link: '/performedactionsblogpost', icon: 'fa fa-circle-o', style: 'default'},
    {name: 'Projects', link: '/projects', icon: 'fa fa-sticky-note-o', style: 'default'},
    {name: 'Tags', link: '/tags', icon: 'fa fa-tag', style: 'default'}
];
