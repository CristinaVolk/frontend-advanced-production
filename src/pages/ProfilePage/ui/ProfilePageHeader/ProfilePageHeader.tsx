import React, { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { classNames } from 'shared/lib/classNames';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTextColor, ButtonTheme } from 'shared/ui/Button/Button';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

import { editableProfileCardActions } from 'features/EditableProfileCard';
import {
  updateProfileData,
} from 'features/EditableProfileCard/model/services/updateProfileData/updateProfileData';

import {
  getProfileFormReadonly,
} from 'features/EditableProfileCard/model/selectors/getProfileFormReadonly/getProfileFormReadonly';

import classes from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
	className?: string;
}

export const ProfilePageHeader = memo(({ className }: ProfilePageHeaderProps) => {
  const { t } = useTranslation('profile');
  const readonly = useSelector(getProfileFormReadonly);
  const dispatch = useAppDispatch();

  const onCancelEdit = useCallback(() => {
    dispatch(editableProfileCardActions.cancelEdit());
  }, [dispatch]);

  const onSave = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  const onEdit = useCallback(() => {
    dispatch(editableProfileCardActions.setReadOnly(false));
  }, [dispatch]);

  return (
       <div className={classNames(classes.ProfilePageHeader, {}, [className])}>
            <Text title={t('profile-page')} />
            {readonly ? (
                 <Button
                    className={classes.editBtn}
                    theme={ButtonTheme.CREATIVE}
                    onClick={onEdit}
                 >
                      {t('edit')}
                 </Button>
            )
              : (
                   <div className={classes.wrapperBtn}>
                        <Button
                           className={classes.editBtn}
                           theme={ButtonTheme.CREATIVE}
                           onClick={onSave}
                        >
                             {t('save')}
                        </Button>
                        <Button
                           className={classes.editBtn}
                           theme={ButtonTheme.CREATIVE}
                           textColor={ButtonTextColor.RED}
                           onClick={onCancelEdit}
                        >
                             {t('cancel')}
                        </Button>
                   </div>
              )}
       </div>
  );
});
