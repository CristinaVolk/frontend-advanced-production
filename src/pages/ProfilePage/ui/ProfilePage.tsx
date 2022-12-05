import React, { memo } from 'react';
import { useParams } from 'react-router-dom';

import {
  DynamicModuleLoader, ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Page } from 'shared/ui/Page/Page';
import {
  useInitialEffect,
} from 'shared/lib/hooks/useAppDispatch/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { VStack } from 'shared/ui/Stack';

import {
  EditableProfileCard, editableProfileCardReducer, fetchProfileData,
} from 'features/EditableProfileCard';

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
                 <VStack gap="32">
                      <ProfilePageHeader />
                      <EditableProfileCard />
                 </VStack>
            </Page>
       </DynamicModuleLoader>
  );
});

export default ProfilePage;
