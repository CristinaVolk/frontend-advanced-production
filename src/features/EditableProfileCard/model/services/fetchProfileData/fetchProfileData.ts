import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import {
  ErrorCodes,
} from '../../../../AuthByUsername/model/services/loginByUsername/loginByUsername';
import { EditableProfile } from '../../types/EditableProfile';

export const fetchProfileData = createAsyncThunk<EditableProfile, void, ThunkConfig<string>>(
  'profile/fetchProfileData',
  async (_, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI;

    try {
      const response = await extra.api.get<EditableProfile>('/profile');

      return response.data;
    } catch (e) {
      console.log(e);
      return rejectWithValue(ErrorCodes.INCORRECT_CREDENTIALS);
    }
  },
);
