import { createAsyncThunk } from '@reduxjs/toolkit';
import { User } from 'entities/User';
import { userActions } from 'entities/User/model/slices/userSlice';
import { ThunkConfig } from 'app/providers/StoreProvider';

interface LoginByUsernameProps {
  username: string;
  password: string;
}

export enum ErrorCodes {
  INCORRECT_CREDENTIALS = 'INCORRECT_CREDENTIALS',
  SERVER_DOWN = 'SERVER_DOWN'
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

        dispatch(userActions.setAuthData(response.data));
        extra.navigate('/about');

        return response.data;
      } catch (e) {
        console.log(e);
        return rejectWithValue(ErrorCodes.INCORRECT_CREDENTIALS);
      }
    },
  );
