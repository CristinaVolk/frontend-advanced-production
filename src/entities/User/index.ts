import type { UserRoles } from './model/const/const';
import { Roles } from './model/const/const';
import {
    getAuthDataHook,
    getUserAuthData,
} from './model/selectors/getUserAuthData/getUserAuthData';
import {
    getIsInitedHook,
    getUserIsInited,
} from './model/selectors/getUserAuthIsInited/getUserIsInited';
import {
    userActions,
    userReducer,
    useUserActions,
} from './model/slices/userSlice';
import type { User, UserSchema } from './model/types/UserSchema';
import {
    getUserRoles,
    isAdminHook,
    isManagerHook,
} from './model/selectors/getUserRoles/getUserRoles';

export {
    userReducer,
    userActions,
    useUserActions,
    UserSchema,
    User,
    Roles,
    UserRoles,
    getUserAuthData,
    getUserIsInited,
    getUserRoles,
    getIsInitedHook,
    getAuthDataHook,
    isAdminHook,
    isManagerHook,
};
