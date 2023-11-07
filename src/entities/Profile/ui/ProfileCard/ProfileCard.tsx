import React, { memo } from 'react';
import { ToggleFeatures } from '@/shared/lib/features';
import { ProfileCardDeprecated } from '../ProfileCardDeprecated/ProfileCardDeprecated';
import { ProfileCardRedesigned } from '../ProfileCardRedesigned/ProfileCardRedesigned';
import { Profile } from '../../model/types/Profile';

interface ProfileCardProps {
    profileFormData?: Profile;
    className?: string;
    onChangeFirstname?: (value?: string) => void;
    onChangeUsername?: (value?: string) => void;
    onChangeCurrency?: (value: string) => void;
    onChangeCountry?: (value: string) => void;
    onChangeAvatar?: (value?: string) => void;
    onKeyPress?: (event: React.KeyboardEvent) => void;
    onChangeAge?: (value?: string) => void;
    readonly?: boolean;
}

export const ProfileCard = memo((props: ProfileCardProps) => (
    <ToggleFeatures
        feature="isAppRedesigned"
        on={<ProfileCardRedesigned {...props} />}
        off={<ProfileCardDeprecated {...props} />}
    />
));
