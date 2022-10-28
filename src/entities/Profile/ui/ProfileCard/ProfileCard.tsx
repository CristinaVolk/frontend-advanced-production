import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import {
  getProfileIsLoading,
} from 'entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileError } from 'entities/Profile/model/selectors/getProfileError/getProfileError';
import { getProfileData } from 'entities/Profile/model/selectors/getProfileData/getProfileData';

import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { Loader } from 'shared/ui/Loader/Loader';
import { Input } from 'shared/ui/Input/Input';
import { classNames } from 'shared/lib/classNames';

import classes from './ProfileCard.module.scss';

interface ProfileCardProps {
	className?: string;
}

export const ProfileCard = (props: ProfileCardProps) => {
  const { className } = props;
  const { t } = useTranslation('profile');
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);
  const profileData = useSelector(getProfileData);

  return (
       <div className={classNames(classes.ProfileCard, {}, [className])}>
            {isLoading && <Loader />}
            {error && <Text theme={TextTheme.ERROR} text={t(error)} />}
            {profileData && (
            <div>
                 <div className={classes.header}>
                      <Text title={t('profile')} />
                      <Button className={classes.editBtn} theme={ButtonTheme.CREATIVE}>
                           {t('change')}
                      </Button>
                 </div>
                 <div className={classes.profileData}>
                      <Input
                         value={profileData.firstname}
                         placeholder={t('enter your firstname')}
                      />
                      <Input
                         value={profileData.username}
                         placeholder={t('enter your username')}
                      />
                 </div>
            </div>
            )}
       </div>
  );
};
