import { StateSchema } from '@/app/providers/StoreProvider';
import { buildSelector } from '@/shared/lib/store';

export const getProfileFormData = (state:StateSchema) => state.editableProfileCard?.formData;

export const [getProfileHook] = buildSelector(getProfileFormData);
