import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { classNames } from '@/shared/lib/classNames';
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import { CurrencySelect } from '@/entities/Currency';
import { CountrySelect } from '@/entities/Country';
import classes from './ProfileCardDeprecated.module.scss';
import { Profile } from '../../model/types/Profile';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Loader } from '@/shared/ui/deprecated/Loader';

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

export const ProfileCardDeprecatedLoader = () => (
    <HStack justify="center">
        <Loader />
    </HStack>
);

export const ProfileCardDeprecated = memo((props: ProfileCardProps) => {
    const {
        profileFormData,
        className,
        readonly,
        onChangeFirstname,
        onChangeUsername,
        onChangeCurrency,
        onChangeCountry,
        onChangeAvatar,
        onChangeAge,
        onKeyPress,
    } = props;

    const { t } = useTranslation('profile');

    return (
        <div className={classNames(classes.ProfileCard, {}, [className])}>
            {profileFormData && (
                <VStack align="center" max>
                    <TextDeprecated title={t('profile')} />
                    <div>
                        {profileFormData.avatar && (
                            <AvatarDeprecated
                                src={profileFormData.avatar}
                                alt={t('avatar')}
                            />
                        )}
                    </div>
                    <VStack
                        gap="16"
                        align="center"
                        max
                        className={classes.profileData}
                    >
                        <InputDeprecated
                            value={profileFormData.firstname}
                            placeholder={t('enter your firstname')}
                            onChange={onChangeFirstname}
                            readonly={readonly}
                            data-testid="ProfileCard.Firstname"
                        />
                        <InputDeprecated
                            value={profileFormData.username}
                            placeholder={t('enter your username')}
                            onChange={onChangeUsername}
                            readonly={readonly}
                            data-testid="ProfileCard.Username"
                        />

                        <CurrencySelect
                            readonly={readonly || false}
                            value={profileFormData?.currency}
                            onChangeOption={onChangeCurrency}
                        />

                        <CountrySelect
                            readonly={readonly || false}
                            value={profileFormData.country}
                            onChangeOption={onChangeCountry}
                        />
                        <InputDeprecated
                            value={profileFormData.age}
                            type="number"
                            placeholder={t('enter your age')}
                            onChange={onChangeAge}
                            readonly={readonly}
                            onKeyPress={onKeyPress}
                        />
                        <InputDeprecated
                            value={profileFormData.avatar}
                            placeholder={t('place the link to your new avatar')}
                            onChange={onChangeAvatar}
                            readonly={readonly}
                        />
                    </VStack>
                </VStack>
            )}
        </div>
    );
});
