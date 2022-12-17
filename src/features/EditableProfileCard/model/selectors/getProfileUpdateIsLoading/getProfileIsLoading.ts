import { StateSchema } from '@/app/providers/StoreProvider';

export const getProfileUpdateIsLoading = (
  state:StateSchema,
) => state.editableProfileCard?.isLoading;
