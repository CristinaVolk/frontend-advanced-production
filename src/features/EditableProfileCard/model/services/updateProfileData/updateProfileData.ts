import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { ErrorCodes } from 'features/AuthByUsername/model/services/loginByUsername/loginByUsername';
import { validateProfileFormData } from '../validateProfileFormData/validateProfileFormData';
import { getProfileFormData } from '../../selectors/getProfileFormData/getProfileFormData';
import { EditableProfile, ValidateProfileError } from '../../types/EditableProfile';

export const updateProfileData = createAsyncThunk<
  EditableProfile,
  void,
  ThunkConfig<Array<ValidateProfileError| ErrorCodes> | undefined>
  >(
    'editableProfileSliceCard/updateProfileData',
    async (_, thunkAPI) => {
      const { extra, rejectWithValue, getState } = thunkAPI;
      const profileFormData = getProfileFormData(getState());

      const validationErrors = validateProfileFormData(profileFormData);

      if (validationErrors.length) {
        return rejectWithValue(validationErrors);
      }

      try {
        const response = await extra.api.put<EditableProfile>('/profile', profileFormData);

        if (!response.data) {
          throw new Error();
        }

        return response.data;
      } catch (e) {
        console.log(e);
        return rejectWithValue([ErrorCodes.SERVER_DOWN]);
      }
    },
  );
