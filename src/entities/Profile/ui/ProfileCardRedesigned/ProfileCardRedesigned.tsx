import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Input } from '@/shared/ui/redesigned/Input';
import { CurrencySelect } from '@/entities/Currency';
import { CountrySelect } from '@/entities/Country';
import { Profile } from '../../model/types/Profile';
import { Card } from '@/shared/ui/redesigned/Card';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';

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

export const ProfileCardSkeletonRedesigned = () => (
    <Card cardPaddings="24" max>
        <VStack>
            <HStack max justify="center">
                <Skeleton width={128} height={128} border="100%" />
            </HStack>

            <HStack gap="32" max>
                <VStack gap="16" max>
                    <Skeleton width="100%" height={38} />
                    <Skeleton width="100%" height={38} />
                    <Skeleton width="100%" height={38} />
                    <Skeleton width="100%" height={38} />
                </VStack>

                <VStack gap="16" max>
                    <Skeleton width="100%" height={38} />
                    <Skeleton width="100%" height={38} />
                    <Skeleton width="100%" height={38} />
                    <Skeleton width="100%" height={38} />
                </VStack>
            </HStack>
        </VStack>
    </Card>
);

export const ProfileCardRedesigned = memo((props: ProfileCardProps) => {
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

    if (!profileFormData) {
        return null;
    }

    return (
        <Card cardPaddings="48" max className={className}>
            <VStack gap="32">
                {profileFormData.avatar && (
                    <HStack justify="center" max>
                        <Avatar
                            src={profileFormData.avatar}
                            alt={t('avatar')}
                        />
                    </HStack>
                )}

                <HStack gap="24">
                    <VStack max gap="16">
                        <Input
                            value={profileFormData.firstname}
                            label={t('Firstname: ')}
                            onChange={onChangeFirstname}
                            readonly={readonly}
                            data-testid="ProfileCard.Firstname"
                        />
                        <Input
                            value={profileFormData.surname}
                            label={t('Surname: ')}
                            onChange={onChangeFirstname}
                            readonly={readonly}
                            data-testid="ProfileCard.Firstname"
                        />
                        <Input
                            value={profileFormData.username}
                            label={t('Username: ')}
                            onChange={onChangeUsername}
                            readonly={readonly}
                            data-testid="ProfileCard.Username"
                        />
                        <Input
                            value={profileFormData.age}
                            type="number"
                            placeholder={t('enter your age')}
                            label={t('Age: ')}
                            onChange={onChangeAge}
                            readonly={readonly}
                            onKeyPress={onKeyPress}
                        />
                    </VStack>
                    <VStack max gap="16">
                        <Input
                            value={profileFormData.avatar}
                            placeholder={t('place the link to your new avatar')}
                            label={t('The link: ')}
                            onChange={onChangeAvatar}
                            readonly={readonly}
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
                    </VStack>
                </HStack>
            </VStack>
        </Card>
    );
});
