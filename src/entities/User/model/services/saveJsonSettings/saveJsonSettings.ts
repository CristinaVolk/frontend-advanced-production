import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { JsonSettings } from '../../types/JsonSettings';
import { getUserAuthData } from '../../selectors/getUserAuthData/getUserAuthData';
import { getUserJsonSettingsHook } from '../../selectors/getUserJsonSettings/getUserJsonSettings';
import { setJsonSettingsMutation } from '../../api/userApi';

export const saveJsonSettings = createAsyncThunk<
    JsonSettings,
    JsonSettings,
    ThunkConfig<string>
>('user/saveJsonSettings', async (newJsonSettings, thunkAPI) => {
    const { getState, dispatch, rejectWithValue } = thunkAPI;
    const userData = getUserAuthData(getState());
    const currentSettings = getUserJsonSettingsHook(getState());

    if (!userData) {
        return rejectWithValue('No userData');
    }

    try {
        const response = await dispatch(
            setJsonSettingsMutation({
                userId: userData.id,
                jsonSettings: {
                    ...currentSettings,
                    ...newJsonSettings,
                },
            }),
        ).unwrap();

        if (!response.jsonSettings) {
            return rejectWithValue('Error during the processing jsonSettings');
        }

        return response.jsonSettings;
    } catch (e) {
        console.log(e);
        return rejectWithValue('Error with User Json Settings');
    }
});
