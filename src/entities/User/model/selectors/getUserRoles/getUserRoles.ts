import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';
import { Roles } from '../../const/const';
import { buildSelector } from '@/shared/lib/store';

export const getUserRoles = (state: StateSchema) => state.user.authData?.roles;

export const isUserAdmin = createSelector(getUserRoles, (roles) =>
    Boolean(roles?.includes(Roles.ADMIN)),
);

export const isUserManager = createSelector(getUserRoles, (roles) =>
    Boolean(roles?.includes(Roles.MANAGER)),
);

export const [isManagerHook] = buildSelector(isUserManager);
export const [isAdminHook] = buildSelector(isUserAdmin);
