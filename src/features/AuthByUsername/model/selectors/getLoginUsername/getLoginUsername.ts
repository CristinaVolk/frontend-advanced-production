import { StateSchema } from '@/app/providers/StoreProvider';
import { buildSelector } from '@/shared/lib/store';

export const getLoginUsername = (state: StateSchema) =>
    state.loginForm?.username || '';

export const [getUsernameHook, usernameSelector] =
    buildSelector(getLoginUsername);
