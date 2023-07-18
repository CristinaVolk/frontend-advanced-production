import { PayloadAction } from '@reduxjs/toolkit';
import { USER_LOCAL_STORAGE_KEY } from '@/shared/const/localStorage';
import { User, UserSchema } from '../types/UserSchema';
import { buildSlice } from '@/shared/lib/store';
import { setFeatureFlags } from '@/shared/lib/features';
import { saveJsonSettings } from '../services/saveJsonSettings/saveJsonSettings';
import { JsonSettings } from '../types/JsonSettings';

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
            localStorage.setItem(
                USER_LOCAL_STORAGE_KEY,
                JSON.stringify(action.payload),
            );
            console.log(action.payload.features);
            setFeatureFlags(action.payload.features);
        },
        initAuthData: (state) => {
            const userData = localStorage.getItem(USER_LOCAL_STORAGE_KEY);
            if (userData) {
                const json = JSON.parse(userData) as User;
                state.authData = json;
                setFeatureFlags(json.features);
            }
            state._inited = true;
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
                        localStorage.setItem(
                            USER_LOCAL_STORAGE_KEY,
                            JSON.stringify(state.authData),
                        );
                    }
                },
            )
            .addCase(saveJsonSettings.rejected, (state, action) => {
                console.log(action.payload);
            });
    },
});

export const {
    actions: userActions,
    reducer: userReducer,
    useActions: useUserActions,
} = userSlice;
