import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { ErrorCodes } from '@/shared/const/common';

import { EditableProfile } from '../../types/EditableProfile';

export const fetchProfileData = createAsyncThunk<EditableProfile, string, ThunkConfig<string>>(
  'profile/fetchProfileData',
  async (userId, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI;

    try {
      const response = await extra.api.get<EditableProfile>(`/profile/${userId}`);

      return response.data;
    } catch (e) {
      return rejectWithValue(ErrorCodes.INCORRECT_CREDENTIALS);
    }
  },
);
