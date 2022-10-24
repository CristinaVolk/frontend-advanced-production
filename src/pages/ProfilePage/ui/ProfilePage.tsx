import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  DynamicModuleLoader, ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { profileReducer } from 'entities/Profile';

const initialReducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage = () => {
  const { t } = useTranslation('profile');

  return (
       <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
            <h1>{t('profile-page')}</h1>
       </DynamicModuleLoader>
  );
};

export default ProfilePage;
