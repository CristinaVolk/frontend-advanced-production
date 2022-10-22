import { createAsyncThunk } from '@reduxjs/toolkit';
import { User } from 'entities/User';
import axios from 'axios';
import { userActions } from 'entities/User/model/slices/userSlice';
import { USER_LOCAL_STORAGE_KEY } from 'shared/const/localStorage';

interface LoginByUsernameProps {
  username: string;
  password: string;
}

export enum ErrorCodes {
  INCORRECT_CREDENTIALS = 'INCORRECT_CREDENTIALS',
  SERVER_DOWN = 'SERVER_DOWN'
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, {rejectValue:string}>(
  'login/loginByUsername',
  async (authData, thunkAPI) => {
    try {
      const response = await axios.post('http://localhost:8000/login', authData);

      if (!response.data) {
        throw new Error();
      }

      localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(response.data));
      thunkAPI.dispatch(userActions.setAuthData(response.data));

      return response.data;
    } catch (e) {
      console.log(e);
      return thunkAPI.rejectWithValue(ErrorCodes.INCORRECT_CREDENTIALS);
    }
  },
);
