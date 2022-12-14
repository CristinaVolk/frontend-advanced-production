import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { ErrorCodes } from 'shared/const/common';

import { ValidateProfileError } from '../../consts/consts';
import { validateProfileFormData } from '../validateProfileFormData/validateProfileFormData';
import { getProfileFormData } from '../../selectors/getProfileFormData/getProfileFormData';
import { EditableProfile } from '../../types/EditableProfile';

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
      const profileId = profileFormData?.id;

      if (validationErrors.length) {
        return rejectWithValue(validationErrors);
      }

      try {
        const response = await extra.api.put<EditableProfile>(
          `/profile/${profileId}`,
          profileFormData,
        );

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
