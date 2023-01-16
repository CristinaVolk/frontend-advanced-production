import { StateSchema } from '@/app/providers/StoreProvider';
import { buildSelector } from '@/shared/lib/store';

export const getLoginFormIsLoading = (state: StateSchema) =>
    state.loginForm?.isLoading || false;

export const [getIsLoadingHook, getIsLoadingSelector] = buildSelector(
    getLoginFormIsLoading,
);
