import { ReactElement } from 'react';
import { FeatureFlags } from '@/shared/types/featureFlags';
import { getFeatureFlags } from '../../lib/setGetFeatures';

interface ToggleFeaturesProps {
    feature: keyof FeatureFlags;
    on: ReactElement;
    off: ReactElement;
}

export const ToggleFeatures = ({ feature, on, off }: ToggleFeaturesProps) => {
    if (getFeatureFlags(feature)) {
        return on;
    }
    return off;
};
