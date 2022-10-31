import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Text, TextTheme } from 'shared/ui/Text/Text';
import { Loader } from 'shared/ui/Loader/Loader';
import { Input } from 'shared/ui/Input/Input';
import { classNames, Modes } from 'shared/lib/classNames';
import { Profile } from 'entities/Profile';
import { validKeyboardKeys } from 'shared/const/common';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { CurrencySelect } from 'entities/Currency/ui/CurrencySelect';
import { CountrySelect } from 'entities/Country/ui/CountrySelect';
import classes from './ProfileCard.module.scss';

interface ProfileCardProps {
  profileData?: Profile;
  isLoading?: boolean;
  error?: string;
  className?: string;
  readonly?: boolean;
  onChangeFirstname?: (value:string) => void;
  onChangeUsername?: (value:string) => void;
  onChangeCurrency?: (value: string) => void;
  onChangeCountry?: (value: string) => void;
  onChangeAge?: (value?: string) => void;
  onChangeAvatar?: (value?: string) => void;
}

export const ProfileCard = memo((props: ProfileCardProps) => {
  const {
    isLoading,
    error,
    profileData,
    readonly,
    onChangeFirstname,
    onChangeUsername,
    onChangeCountry,
    onChangeCurrency,
    onChangeAge,
    onChangeAvatar,
  } = props;
  const { className } = props;
  const { t } = useTranslation('profile');

  const modes: Modes = {
    [classes.isEditing]: !readonly,
  };

  const onKeyPress = (event: React.KeyboardEvent) => {
    if (
      !/[0-9]/.test(event.key)
      && !(Object.values(validKeyboardKeys).some((v) => v === event.key))
    ) {
      event.preventDefault();
    }
  };

  if (isLoading) {
    return (
         <div className={classNames(
           classes.ProfileCard,
           {},
           [className, classes.loading],
         )}
         >
              <Loader />
         </div>
    );
  }

  if (error) {
    return (
         <div className={classNames(
           classes.ProfileCard,
           {},
           [className, classes.error],
         )}
         >
              <Text theme={TextTheme.ERROR} text={t(error)} />
         </div>
    );
  }

  return (
       <div className={classNames(
         classes.ProfileCard,
         modes,
         [className],
       )}
       >
            {profileData && (
            <div>
                 <Text title={t('profile')} />
                 <div className={classes.avatarWrapper}>
                      {profileData.avatar && <Avatar src={profileData.avatar} alt={t('avatar')} />}
                 </div>
                 <div className={classes.profileData}>
                      <Input
                         value={profileData.firstname}
                         placeholder={t('enter your firstname')}
                         onChange={onChangeFirstname}
                         readonly={readonly}
                      />
                      <Input
                         value={profileData.username}
                         placeholder={t('enter your username')}
                         onChange={onChangeUsername}
                         readonly={readonly}
                      />

                      <CurrencySelect
                         readonly={readonly || false}
                         label={profileData.currency}
                         value={profileData?.currency}
                         onChangeOption={onChangeCurrency}
                      />

                      <CountrySelect
                         readonly={readonly || false}
                         label={profileData.country}
                         value={profileData.country}
                         onChangeOption={onChangeCountry}
                      />
                      <Input
                         value={profileData.age}
                         type="number"
                         placeholder={t('enter your age')}
                         onChange={onChangeAge}
                         readonly={readonly}
                         onKeyPress={onKeyPress}
                      />
                      <Input
                         value={profileData.avatar}
                         placeholder={t('place the link to your new avatar')}
                         onChange={onChangeAvatar}
                         readonly={readonly}
                      />
                 </div>
            </div>
            )}
       </div>
  );
});
