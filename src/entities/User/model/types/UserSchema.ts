export const Roles = {
  USER: 'USER',
  MANAGER: 'MANAGER',
  ADMIN: 'ADMIN',
} as const;
export type UserRoles = ValueOf<typeof Roles>;

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
