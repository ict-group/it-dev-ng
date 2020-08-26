export const Admin = 'Admin';
export const Web = 'Web';

export const Nessuno = 'NONE';

export class Permissions {

    public static get acls(): Map< string, string[]> {
        return new Map< string, string[]>()
          .set('ADMIN', [Admin])
          .set('ANY', [Admin, Web]);
    }

}
