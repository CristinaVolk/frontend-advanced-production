import React, { useEffect } from 'react';
import {
  DynamicModuleLoader, ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { fetchProfileData, profileReducer } from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { ProfilePageHeader } from 'pages/ProfilePage/ui/ProfilePageHeader/ProfilePageHeader';

import {
  editableProfileCardActions, editableProfileCardReducer,
} from 'features/EditableProfileCard';

import { EditableProfileCard } from 'features/EditableProfileCard/ui/EditableProfileCard';
import { getProfileData } from 'entities/Profile/model/selectors/getProfileData/getProfileData';

const initialReducers: ReducersList = {
  profile: profileReducer,
  editableProfileCard: editableProfileCardReducer,
};

const ProfilePage = () => {
  const dispatch = useAppDispatch();
  const profileData = useSelector(getProfileData);

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  useEffect(() => {
    if (profileData) {
      dispatch(editableProfileCardActions.setInitialFormData(profileData));
    }
  }, [dispatch, profileData]);

  return (
       <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
            <ProfilePageHeader />
            <EditableProfileCard />
       </DynamicModuleLoader>
  );
};

export default ProfilePage;
