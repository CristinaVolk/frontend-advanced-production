import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Text } from 'shared/ui/Text/Text';
import { classNames } from 'shared/lib/classNames';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { VStack } from 'shared/ui/Stack';
import { Input } from 'shared/ui/Input/Input';
import { CurrencySelect } from 'entities/Currency';
import { CountrySelect } from 'entities/Country/ui/CountrySelect';
import classes from './ProfileCard.module.scss';
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
  onChangeAge?: (value?: string) => void
  readonly?: boolean;
}

export const ProfileCard = memo((props: ProfileCardProps) => {
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
       <div className={classNames(
         classes.ProfileCard,
         {},
         [className],
       )}
       >
            {profileFormData && (
            <VStack align="center" max>
                 <Text title={t('profile')} />
                 <div>
                      {profileFormData.avatar
                 && (
                 <Avatar
                    src={profileFormData.avatar}
                    alt={t('avatar')}
                 />
                 )}
                 </div>
                 <VStack gap="16" align="center" max className={classes.profileData}>
                      <Input
                         value={profileFormData.firstname}
                         placeholder={t('enter your firstname')}
                         onChange={onChangeFirstname}
                         readonly={readonly}
                         data-testId="ProfileCard.Firstname"
                      />
                      <Input
                         value={profileFormData.username}
                         placeholder={t('enter your username')}
                         onChange={onChangeUsername}
                         readonly={readonly}
                         data-testId="ProfileCard.Username"
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
                      <Input
                         value={profileFormData.age}
                         type="number"
                         placeholder={t('enter your age')}
                         onChange={onChangeAge}
                         readonly={readonly}
                         onKeyPress={onKeyPress}
                      />
                      <Input
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
