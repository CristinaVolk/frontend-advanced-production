import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { getUserDataByIdQuery } from '../../api/userApi';
import { User } from '../../types/UserSchema';
import { USER_LOCAL_STORAGE_KEY } from '@/shared/const/localStorage';

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

            return response;
        } catch (e) {
            console.log(e);
            return rejectWithValue('Error with initializing the User');
        }
    },
);
