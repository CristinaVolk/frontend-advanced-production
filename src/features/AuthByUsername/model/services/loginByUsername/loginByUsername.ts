import { createAsyncThunk } from '@reduxjs/toolkit';
import { User } from '@/entities/User';
import { userActions } from '@/entities/User/model/slices/userSlice';
import { ThunkConfig } from '@/app/providers/StoreProvider/config/StateSchema';
import { ErrorCodes } from '@/shared/const/common';

interface LoginByUsernameProps {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<
  User,
  LoginByUsernameProps,
  ThunkConfig<string>
  >(
    'login/loginByUsername',
    async (authData, thunkAPI) => {
      const { extra, dispatch, rejectWithValue } = thunkAPI;
      try {
        const response = await extra.api.post('/login', authData);

        if (!response.data) {
          throw new Error();
        }

        setTimeout(() => {
          dispatch(userActions.setAuthData(response.data));
        }, 4000);

        return response.data;
      } catch (e) {
        console.log(e);
        return rejectWithValue(ErrorCodes.INCORRECT_CREDENTIALS);
      }
    },
  );
