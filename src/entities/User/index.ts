import type { UserRoles } from './model/const/const';
import { Roles } from './model/const/const';
import { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';
import { getUserIsInited } from './model/selectors/getUserAuthIsInited/getUserIsInited';
import { userActions, userReducer } from './model/slices/userSlice';
import type { User, UserSchema } from './model/types/UserSchema';
import {
  getUserRoles, isUserAdmin, isUserManager,
} from './model/selectors/getUserRoles/getUserRoles';

export {
  userReducer,
  userActions,
  UserSchema,
  User,
  Roles,
  UserRoles,
  getUserAuthData,
  getUserIsInited,
  isUserAdmin,
  isUserManager,
  getUserRoles,
};
