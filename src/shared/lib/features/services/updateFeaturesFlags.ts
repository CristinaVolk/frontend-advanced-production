import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { updateFeatureFlagsMutation } from '../api/featuresFlagsApi';
import { getAllFeatureFlags } from '../lib/setGetFeatures';
import { FeatureFlags } from '@/shared/types/featureFlags';

interface UpdateFeatureFlagOptions {
    userId: string;
    newFeatures: Partial<FeatureFlags>;
}

export const updateFeaturesFlags = createAsyncThunk<
    void,
    UpdateFeatureFlagOptions,
    ThunkConfig<string>
>('user/updateFeaturesFlags', async ({ userId, newFeatures }, thunkAPI) => {
    const { dispatch, rejectWithValue } = thunkAPI;

    try {
        await dispatch(
            updateFeatureFlagsMutation({
                userId,
                features: {
                    ...getAllFeatureFlags(),
                    ...newFeatures,
                },
            }),
        );

        window.location.reload();
        return undefined;
    } catch (e) {
        console.log(e);
        return rejectWithValue('Error with User updating features flags');
    }
});
