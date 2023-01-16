import { StateSchema } from '@/app/providers/StoreProvider';
import { buildSelector } from '@/shared/lib/store';

export const getUserAuthData = (state: StateSchema) => state.user.authData;

export const [getAuthDataHook] = buildSelector(getUserAuthData);
