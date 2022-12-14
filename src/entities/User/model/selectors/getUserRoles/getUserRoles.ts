import { StateSchema } from 'app/providers/StoreProvider';
import { createSelector } from '@reduxjs/toolkit';
import { Roles } from '../../const/const';

export const getUserRoles = (state:StateSchema) => state.user.authData?.roles;

export const isUserAdmin = createSelector(
  getUserRoles,
  (roles) => Boolean(roles?.includes(Roles.ADMIN)),
);

export const isUserManager = createSelector(
  getUserRoles,
  (roles) => Boolean(roles?.includes(Roles.MANAGER)),
);
