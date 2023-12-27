import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { getUserDataByIdQuery } from '../../api/userApi';
import { User } from '../../types/UserSchema';
import {
    LOCAL_STORAGE_LAST_DESIGN_KEY,
    USER_LOCAL_STORAGE_KEY,
} from '@/shared/const/localStorage';

export const initAuthData = createAsyncThunk<User, void, ThunkConfig<string>>(
    'user/initAuthData',
    async (_, thunkAPI) => {
        const { dispatch, rejectWithValue } = thunkAPI;
        const userId = JSON.parse(
            localStorage.getItem(USER_LOCAL_STORAGE_KEY) ?? '{}',
        ).id;

        if (!userId) {
            return rejectWithValue('No userData');
        }

        try {
            const response = await dispatch(
                getUserDataByIdQuery(userId),
            ).unwrap();

            localStorage.setItem(
                LOCAL_STORAGE_LAST_DESIGN_KEY,
                response.features?.isAppRedesigned ? 'new' : 'old',
            );

            return response;
        } catch (e) {
            console.log(e);
            return rejectWithValue('Error with initializing the User');
        }
    },
);
