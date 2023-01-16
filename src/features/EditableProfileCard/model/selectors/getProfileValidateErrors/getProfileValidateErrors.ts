import { StateSchema } from '@/app/providers/StoreProvider';
import { buildSelector } from '@/shared/lib/store';

export const getProfileValidateErrors = (state: StateSchema) =>
    state.editableProfileCard?.validateProfileErrors || undefined;

export const [getProfileValidateErrorsHook] = buildSelector(
    getProfileValidateErrors,
);
