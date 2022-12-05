import React, { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { HStack } from 'shared/ui/Stack';
import { classNames } from 'shared/lib/classNames';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTextColor, ButtonTheme } from 'shared/ui/Button/Button';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUserAuthData } from 'entities/User';
import {
  editableProfileCardActions, getProfileFormData, getProfileFormReadonly, updateProfileData,
} from 'features/EditableProfileCard';

export const ProfilePageHeader = memo(() => {
  const { t } = useTranslation('profile');
  const readonly = useSelector(getProfileFormReadonly);
  const userData = useSelector(getUserAuthData);
  const profileData = useSelector(getProfileFormData);
  const canEdit = String(userData?.id) === String(profileData?.id);
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
       <HStack
          max
          justify="between"
          className={classNames('', {}, [])}
       >
            <Text title={t('profile-page')} />
            {canEdit && (
            <>
                 {readonly ? (
                      <Button
                         theme={ButtonTheme.CREATIVE}
                         onClick={onEdit}
                      >
                           {t('edit')}
                      </Button>
                 )
                   : (
                        <HStack gap="16" justify="end">
                             <Button
                                theme={ButtonTheme.CREATIVE}
                                onClick={onSave}
                             >
                                  {t('save')}
                             </Button>
                             <Button
                                theme={ButtonTheme.CREATIVE}
                                textColor={ButtonTextColor.RED}
                                onClick={onCancelEdit}
                             >
                                  {t('cancel')}
                             </Button>
                        </HStack>
                   )}
            </>
            )}
       </HStack>
  );
});
