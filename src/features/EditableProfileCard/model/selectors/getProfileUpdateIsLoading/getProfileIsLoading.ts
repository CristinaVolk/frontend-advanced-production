import { StateSchema } from '@/app/providers/StoreProvider';
import { buildSelector } from '@/shared/lib/store';

export const getProfileUpdateIsLoading = (state: StateSchema) =>
    state.editableProfileCard?.isLoading;

export const [getProfileIsLoadingHook] = buildSelector(
    getProfileUpdateIsLoading,
);
