import { UserRoles } from '../const/const';

export interface User {
    id: string;
    username: string;
    avatar?: string;
    roles?: Array<UserRoles>;
}

export interface UserSchema {
    authData: User | undefined;
    _inited: boolean;
}
