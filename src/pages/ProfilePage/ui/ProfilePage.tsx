import React from 'react';
import {
  DynamicModuleLoader, ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { ProfilePageHeader } from 'pages/ProfilePage/ui/ProfilePageHeader/ProfilePageHeader';

import { editableProfileCardReducer } from 'features/EditableProfileCard';

import { EditableProfileCard } from 'features/EditableProfileCard/ui/EditableProfileCard';

const initialReducers: ReducersList = {
  editableProfileCard: editableProfileCardReducer,
};

const ProfilePage = () => (
     <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
          <ProfilePageHeader />
          <EditableProfileCard />
     </DynamicModuleLoader>
);

export default ProfilePage;
