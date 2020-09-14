export const Admin = 'Admin';
export const Manager = 'Manager';
export const User = 'User';

export const Nessuno = 'NONE';

export class Permissions {

    public static get acls(): Map<string, string[]> {
        return new Map<string, string[]>()
            .set('ADMIN', [Admin])
            .set('MANAGER', [Manager])
            .set('USER', [User])
            .set('ANY', [Admin, Manager, User]);
    }

}
