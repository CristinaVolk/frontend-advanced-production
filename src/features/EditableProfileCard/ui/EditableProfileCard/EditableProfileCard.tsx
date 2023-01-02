import React, { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames, Modes } from '@/shared/lib/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Text, TextTheme } from '@/shared/ui/Text';
import { Loader } from '@/shared/ui/Loader';
import { ErrorCodes, validKeyboardKeys } from '@/shared/const/common';

import { HStack, VStack } from '@/shared/ui/Stack';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import {
  DynamicModuleLoader, ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { ProfileCard } from '@/entities/Profile';
import { ValidateProfileError } from '../../model/consts/consts';
import {
  editableProfileCardReducer, useEditableProfileCardActions,
} from '../../model/slices/editableProfileCardSlice/editableProfileCardSlice';
import { ProfileCardHeader } from '../ProfileCardHeader/ProfileCardHeader';
import { getProfileHook } from '../../model/selectors/getProfileFormData/getProfileFormData';
import {
  getProfileReadonlyHook,
} from '../../model/selectors/getProfileFormReadonly/getProfileFormReadonly';
import {
  getProfileIsLoadingHook,
} from '../../model/selectors/getProfileUpdateIsLoading/getProfileIsLoading';
import {
  getProfileValidateErrorsHook,
} from '../../model/selectors/getProfileValidateErrors/getProfileValidateErrors';
import { fetchProfileData } from '../../model/services/fetchProfileData/fetchProfileData';
import classes from './EditableProfileCard.module.scss';

interface EditableProfileCardProps {
  id?: string;
  className?: string;
}

export const EditableProfileCard = memo((props: EditableProfileCardProps) => {
  const { className, id } = props;
  const { t } = useTranslation('profile');

  const dispatch = useAppDispatch();
  const isLoading = getProfileIsLoadingHook();
  const profileFormData = getProfileHook();
  const readonly = getProfileReadonlyHook();
  const validateProfileErrors = getProfileValidateErrorsHook();
  const { updateData } = useEditableProfileCardActions();

  const modes: Modes = {
    [classes.isEditing]: !readonly,
  };

  useInitialEffect(() => {
    if (id) {
      dispatch(fetchProfileData(id));
    }
  });

  const onChangeFirstname = useCallback((value?: string) => {
    updateData({ firstname: value || '' });
  }, [updateData]);

  const onChangeUsername = useCallback((value?: string) => {
    updateData({ username: value || '' });
  }, [updateData]);

  const onChangeCurrency = useCallback((currency: string) => {
    updateData({ currency });
  }, [updateData]);

  const onChangeCountry = useCallback((country: string) => {
    updateData({ country });
  }, [updateData]);

  const onChangeAge = useCallback((value?: string) => {
    updateData({ age: Number(value || 0) });
  }, [updateData]);

  const onChangeAvatar = useCallback((avatar?: string) => {
    updateData({ avatar: avatar || '' });
  }, [updateData]);

  const onKeyPress = (event: React.KeyboardEvent) => {
    if (
      !/[0-9]/.test(event.key)
      && !(Object.values(validKeyboardKeys).some((v) => v === event.key))
    ) {
      event.preventDefault();
    }
  };

  const validateErrorTranslates: Record<ErrorCodes | ValidateProfileError, string> = {
    [ErrorCodes.SERVER_DOWN]: t('Server error occurred'),
    [ErrorCodes.INCORRECT_CREDENTIALS]: t('Incorrect username or password'),
    [ValidateProfileError.INCORRECT_COUNTRY]: t('Wrong country'),
    [ValidateProfileError.NO_DATA]: t('The data has not been entered'),
    [ValidateProfileError.INCORRECT_USER_DATA]: t('Firstname and username are required'),
    [ValidateProfileError.INCORRECT_AGE]: t('Wrong age'),
  };

  const initialReducers: ReducersList = {
    editableProfileCard: editableProfileCardReducer,
  };

  return (
       <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
            {isLoading && <HStack justify="center"><Loader /></HStack>}
            <VStack
               max
               className={classNames(
                 classes.EditableProfileCard,
                 modes,
                 [className],
               )}
            >
                 <ProfileCardHeader />

                 {validateProfileErrors?.length && validateProfileErrors.map((validationError) => (
                      <Text
                         key={validationError}
                         theme={TextTheme.ERROR}
                         text={validateErrorTranslates[validationError]}
                         data-testid="EditableProfileCard.Error"
                      />
                 ))}
                 <ProfileCard
                    readonly={readonly}
                    profileFormData={profileFormData}
                    onChangeUsername={onChangeUsername}
                    onChangeFirstname={onChangeFirstname}
                    onChangeAge={onChangeAge}
                    onKeyPress={onKeyPress}
                    onChangeCurrency={onChangeCurrency}
                    onChangeCountry={onChangeCountry}
                    onChangeAvatar={onChangeAvatar}
                 />
            </VStack>
       </DynamicModuleLoader>

  );
});
