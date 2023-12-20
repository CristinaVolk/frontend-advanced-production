import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { updateFeatureFlagsMutation } from '../api/featuresFlagsApi';
import { getAllFeatureFlags, setFeatureFlags } from '../lib/setGetFeatures';
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

    const allFeatures = {
        ...getAllFeatureFlags(),
        ...newFeatures,
    };

    try {
        await dispatch(
            updateFeatureFlagsMutation({
                userId,
                features: allFeatures,
            }),
        );

        setFeatureFlags(allFeatures);
        // window.location.reload();

        return undefined;
    } catch (e) {
        console.log(e);
        return rejectWithValue('Error with User updating features flags');
    }
});
