import React, { memo } from 'react';
import {
  DynamicModuleLoader, ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

import { editableProfileCardReducer } from 'features/EditableProfileCard';

import { EditableProfileCard } from 'features/EditableProfileCard/ui/EditableProfileCard';
import { Page } from 'shared/ui/Page/Page';
import {
  useInitialEffect,
} from 'shared/lib/hooks/useAppDispatch/useInitialEffect/useInitialEffect';
import {
  fetchProfileData,
} from 'features/EditableProfileCard/model/services/fetchProfileData/fetchProfileData';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';

const initialReducers: ReducersList = {
  editableProfileCard: editableProfileCardReducer,
};

const ProfilePage = memo(() => {
  const { id } = useParams<{id:string}>();
  const dispatch = useAppDispatch();

  useInitialEffect(() => {
    if (id) {
      dispatch(fetchProfileData(id));
    }
  });

  return (
       <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
            <Page>
                 <ProfilePageHeader />
                 <EditableProfileCard />
            </Page>
       </DynamicModuleLoader>
  );
});

export default ProfilePage;
