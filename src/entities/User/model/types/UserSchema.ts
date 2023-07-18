import { UserRoles } from '../const/const';
import { FeatureFlags } from '@/shared/types/featureFlags';
import { JsonSettings } from '../types/JsonSettings';

export interface User {
    id: string;
    username: string;
    avatar?: string;
    roles?: Array<UserRoles>;
    features?: FeatureFlags;
    jsonSettings?: JsonSettings;
}

export interface UserSchema {
    authData: User | undefined;
    _inited: boolean;
}
