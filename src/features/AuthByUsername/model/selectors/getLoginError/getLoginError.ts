import { StateSchema } from '@/app/providers/StoreProvider';
import { buildSelector } from '@/shared/lib/store';

export const getLoginError = ((state:StateSchema) => state.loginForm?.error || '');

export const [getLoginErrorHook, loginErrorSelector] = buildSelector(getLoginError);
