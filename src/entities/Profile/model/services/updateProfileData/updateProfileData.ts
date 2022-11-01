import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { ErrorCodes } from 'features/AuthByUsername/model/services/loginByUsername/loginByUsername';
import { getProfileFormData } from '../../selectors/getProfileFormData/getProfileFormData';
import { Profile } from '../../types/Profile';

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
  'profile/updateProfileData',
  async (_, thunkAPI) => {
    const { extra, rejectWithValue, getState } = thunkAPI;
    const profileFormData = getProfileFormData(getState());

    try {
      const response = await extra.api.put<Profile>('/profile', profileFormData);
      console.log(response.data);

      return response.data;
    } catch (e) {
      console.log(e);
      return rejectWithValue(ErrorCodes.INCORRECT_CREDENTIALS);
    }
  },
);
