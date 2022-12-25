import React, { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { HStack } from '@/shared/ui/Stack';
import { classNames } from '@/shared/lib/classNames';
import { Text } from '@/shared/ui/Text';
import { Button, ButtonTextColor, ButtonTheme } from '@/shared/ui/Button';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUserAuthData } from '@/entities/User';
import {
  editableProfileCardActions,
} from '../../model/slices/editableProfileCardSlice/editableProfileCardSlice';
import { getProfileFormData } from '../../model/selectors/getProfileFormData/getProfileFormData';
import {
  getProfileFormReadonly,
} from '../../model/selectors/getProfileFormReadonly/getProfileFormReadonly';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';

export const ProfileCardHeader = memo(() => {
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
                         data-testid="EditableProfileCard.EditButton"
                      >
                           {t('edit')}
                      </Button>
                 )
                   : (
                        <HStack gap="16" justify="end">
                             <Button
                                theme={ButtonTheme.CREATIVE}
                                onClick={onSave}
                                data-testid="EditableProfileCard.SaveButton"
                             >
                                  {t('save')}
                             </Button>
                             <Button
                                theme={ButtonTheme.CREATIVE}
                                textColor={ButtonTextColor.RED}
                                onClick={onCancelEdit}
                                data-testid="EditableProfileCard.CancelButton"
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
