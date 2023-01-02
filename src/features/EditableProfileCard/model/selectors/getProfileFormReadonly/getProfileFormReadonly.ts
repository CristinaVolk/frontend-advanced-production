import { StateSchema } from '@/app/providers/StoreProvider';
import { buildSelector } from '@/shared/lib/store';

export const getProfileFormReadonly = (state:StateSchema) => state.editableProfileCard?.readonly;

export const [getProfileReadonlyHook] = buildSelector(getProfileFormReadonly);
