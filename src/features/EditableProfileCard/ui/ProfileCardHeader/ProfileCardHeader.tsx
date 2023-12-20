import React, { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { HStack } from '@/shared/ui/redesigned/Stack';
import { classNames } from '@/shared/lib/classNames';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Text as TextRedesigned } from '@/shared/ui/redesigned/Text';
import {
    Button as ButtonDeprecated,
    ButtonTextColor,
    ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { Button as ButtonRedesigned } from '@/shared/ui/redesigned/Button';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUserAuthData } from '@/entities/User';
import { editableProfileCardActions } from '../../model/slices/editableProfileCardSlice/editableProfileCardSlice';
import { getProfileFormData } from '../../model/selectors/getProfileFormData/getProfileFormData';
import { getProfileFormReadonly } from '../../model/selectors/getProfileFormReadonly/getProfileFormReadonly';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { ToggleFeatures } from '@/shared/lib/features';
import { Card } from '@/shared/ui/redesigned/Card';

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
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Card border="round" cardPaddings="16" max>
                    <HStack
                        max
                        justify="between"
                        className={classNames('', {}, [])}
                    >
                        <TextRedesigned title={t('profile-page')} />
                        {canEdit && (
                            <>
                                {readonly ? (
                                    <ButtonRedesigned
                                        onClick={onEdit}
                                        data-testid="EditableProfileCard.EditButton"
                                    >
                                        {t('edit')}
                                    </ButtonRedesigned>
                                ) : (
                                    <HStack gap="16" justify="end">
                                        <ButtonRedesigned
                                            onClick={onSave}
                                            variant="outline"
                                            color="success"
                                            data-testid="EditableProfileCard.SaveButton"
                                        >
                                            {t('save')}
                                        </ButtonRedesigned>
                                        <ButtonRedesigned
                                            onClick={onCancelEdit}
                                            variant="outline"
                                            color="error"
                                            data-testid="EditableProfileCard.CancelButton"
                                        >
                                            {t('cancel')}
                                        </ButtonRedesigned>
                                    </HStack>
                                )}
                            </>
                        )}
                    </HStack>
                </Card>
            }
            off={
                <HStack
                    max
                    justify="between"
                    className={classNames('', {}, [])}
                >
                    <TextDeprecated title={t('profile-page')} />
                    {canEdit && (
                        <>
                            {readonly ? (
                                <ButtonDeprecated
                                    theme={ButtonTheme.CREATIVE}
                                    onClick={onEdit}
                                    data-testid="EditableProfileCard.EditButton"
                                >
                                    {t('edit')}
                                </ButtonDeprecated>
                            ) : (
                                <HStack gap="16" justify="end">
                                    <ButtonDeprecated
                                        theme={ButtonTheme.CREATIVE}
                                        onClick={onSave}
                                        data-testid="EditableProfileCard.SaveButton"
                                    >
                                        {t('save')}
                                    </ButtonDeprecated>
                                    <ButtonDeprecated
                                        theme={ButtonTheme.CREATIVE}
                                        textColor={ButtonTextColor.RED}
                                        onClick={onCancelEdit}
                                        data-testid="EditableProfileCard.CancelButton"
                                    >
                                        {t('cancel')}
                                    </ButtonDeprecated>
                                </HStack>
                            )}
                        </>
                    )}
                </HStack>
            }
        />
    );
});
