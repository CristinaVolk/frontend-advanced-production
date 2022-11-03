import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Text, TextTheme } from 'shared/ui/Text/Text';
import { Loader } from 'shared/ui/Loader/Loader';
import { classNames } from 'shared/lib/classNames';
import { Profile } from 'features/EditableProfileCard/model/types/Profile';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import classes from './ProfileCard.module.scss';

interface ProfileCardProps {
  profileData?: Profile;
  isLoading?: boolean;
  error?: string;
  className?: string;
}

export const ProfileCard = memo((props: ProfileCardProps) => {
  const {
    isLoading,
    error,
    profileData,
  } = props;
  const { className } = props;
  const { t } = useTranslation('profile');

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
         { },
         [className],
       )}
       >
            {profileData && (
            <div>
                 <Text title={t('profile')} />
                 <div className={classes.avatarWrapper}>
                      {profileData.avatar && <Avatar src={profileData.avatar} alt={t('avatar')} />}
                 </div>
                 <div className={classes.profileData} />
            </div>
            )}
       </div>
  );
});
