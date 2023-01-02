import { StateSchema } from '@/app/providers/StoreProvider';
import { buildSelector } from '@/shared/lib/store';

export const getLoginPassword = ((state:StateSchema) => state.loginForm?.password || '');
export const [getPasswordHook, getPasswordSelector] = buildSelector(getLoginPassword);
