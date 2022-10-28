import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {
  DynamicModuleLoader, ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { fetchProfileData, ProfileCard, profileReducer } from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

const initialReducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage = () => {
  const { t } = useTranslation('profile');
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  return (
       <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
            <h1>{t('profile-page')}</h1>
            <ProfileCard />
       </DynamicModuleLoader>
  );
};

export default ProfilePage;
