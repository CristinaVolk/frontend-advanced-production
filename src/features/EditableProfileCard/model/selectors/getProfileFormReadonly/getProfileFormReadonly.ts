import { StateSchema } from 'app/providers/StoreProvider';

export const getProfileFormReadonly = (state:StateSchema) => state.editableProfileCard?.readonly;
