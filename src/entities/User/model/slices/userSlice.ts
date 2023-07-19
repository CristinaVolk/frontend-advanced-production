import { PayloadAction } from '@reduxjs/toolkit';
import { USER_LOCAL_STORAGE_KEY } from '@/shared/const/localStorage';
import { User, UserSchema } from '../types/UserSchema';
import { buildSlice } from '@/shared/lib/store';
import { setFeatureFlags } from '@/shared/lib/features';
import { saveJsonSettings } from '../services/saveJsonSettings/saveJsonSettings';
import { JsonSettings } from '../types/JsonSettings';
import { initAuthData } from '../services/initAuthData/initAuthData';

const initialState: UserSchema = {
    authData: undefined,
    _inited: false,
};

export const userSlice = buildSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<User>) => {
            state.authData = action.payload;
            setFeatureFlags(action.payload.features);
            localStorage.setItem(
                USER_LOCAL_STORAGE_KEY,
                JSON.stringify(action.payload),
            );
        },
        logout: (state) => {
            localStorage.removeItem(USER_LOCAL_STORAGE_KEY);
            state.authData = undefined;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(
                saveJsonSettings.fulfilled,
                (state, { payload }: PayloadAction<JsonSettings>) => {
                    if (state.authData) {
                        state.authData.jsonSettings = payload;
                    }
                },
            )
            .addCase(
                initAuthData.fulfilled,
                (state, { payload }: PayloadAction<User>) => {
                    state.authData = payload;
                    setFeatureFlags(payload.features);
                    state._inited = true;
                },
            )
            .addCase(initAuthData.rejected, (state) => {
                state._inited = true;
            });
    },
});

export const {
    actions: userActions,
    reducer: userReducer,
    useActions: useUserActions,
} = userSlice;
