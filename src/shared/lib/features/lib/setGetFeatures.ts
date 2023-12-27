import { FeatureFlags } from '../../../types/featureFlags';
import { LOCAL_STORAGE_LAST_DESIGN_KEY } from '@/shared/const/localStorage';

const defaultFeatures = {
    isAppRedesigned:
        localStorage.getItem(LOCAL_STORAGE_LAST_DESIGN_KEY) === 'new',
};

let featureFlags: FeatureFlags = {
    ...defaultFeatures,
};

export function setFeatureFlags(newFeatureFlags?: FeatureFlags) {
    if (newFeatureFlags) {
        featureFlags = newFeatureFlags;
    }
}

export function getFeatureFlags(flag: keyof FeatureFlags) {
    if (!featureFlags) {
        return false;
    }
    return featureFlags[flag];
}

export function getAllFeatureFlags() {
    return featureFlags;
}
