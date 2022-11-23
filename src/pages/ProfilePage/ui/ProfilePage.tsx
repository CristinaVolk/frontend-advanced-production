import React from 'react';
import {
  DynamicModuleLoader, ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { ProfilePageHeader } from 'pages/ProfilePage/ui/ProfilePageHeader/ProfilePageHeader';

import { editableProfileCardReducer } from 'features/EditableProfileCard';

import { EditableProfileCard } from 'features/EditableProfileCard/ui/EditableProfileCard';
import { Page } from 'shared/ui/Page/Page';

const initialReducers: ReducersList = {
  editableProfileCard: editableProfileCardReducer,
};

const ProfilePage = () => (
     <DynamicModuleLoader reducers={initialReducers}>
          <Page>
               <ProfilePageHeader />
               <EditableProfileCard />
          </Page>
     </DynamicModuleLoader>
);

export default ProfilePage;
