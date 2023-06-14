import { UserRoles } from '../const/const';
import { FeatureFlags } from '@/shared/types/featureFlags';

export interface User {
    id: string;
    username: string;
    avatar?: string;
    roles?: Array<UserRoles>;
    features?: FeatureFlags;
}

export interface UserSchema {
    authData: User | undefined;
    _inited: boolean;
}
