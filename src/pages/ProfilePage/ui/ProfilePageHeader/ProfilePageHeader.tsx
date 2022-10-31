import React, { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { classNames } from 'shared/lib/classNames';
import { Button, ButtonTextColor, ButtonTheme } from 'shared/ui/Button/Button';
import {
  getProfileReadonly,
} from 'entities/Profile/model/selectors/getProfileReadonly/getProfileReadonly';

import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { profileActions } from 'entities/Profile';
import classes from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
	className?: string;
}

export const ProfilePageHeader = memo(({ className }: ProfilePageHeaderProps) => {
  const { t } = useTranslation('profile');
  const readonly = useSelector(getProfileReadonly);
  const dispatch = useAppDispatch();

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit());
    dispatch(profileActions.setReadOnly(true));
  }, [dispatch]);

  const onSave = useCallback(() => {
    dispatch(profileActions.setReadOnly(true));
  }, [dispatch]);

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadOnly(false));
  }, [dispatch]);

  return (
       <div className={classNames(classes.ProfilePageHeader, {}, [className])}>
            <h1 className={classes.header}>{t('profile-page')}</h1>
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
