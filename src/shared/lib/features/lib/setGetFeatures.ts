import { FeatureFlags } from '../../../types/featureFlags';

let featureFlags: FeatureFlags = {};

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
