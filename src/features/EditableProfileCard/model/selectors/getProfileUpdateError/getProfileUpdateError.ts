import { StateSchema } from '@/app/providers/StoreProvider';

export const getProfileUpdateError = ((state:StateSchema) => state.editableProfileCard?.error
  || '');
