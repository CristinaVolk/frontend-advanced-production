export const Roles = {
    USER: 'USER',
    MANAGER: 'MANAGER',
    ADMIN: 'ADMIN',
} as const;
export type UserRoles = ValueOf<typeof Roles>;
