import { Story } from '@storybook/react';
import { ReducersMapObject } from '@reduxjs/toolkit';

import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { loginReducer } from 'features/AuthByUsername/model/slices/loginSlice';
import { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { editableProfileCardReducer } from 'features/EditableProfileCard';

const defaultAsyncReducers: ReducersList = {
  loginForm: loginReducer,
  editableProfileCard: editableProfileCardReducer,
};

export const StoreDecorator = (
  state: DeepPartial<StateSchema>,
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>,
) => (StoryComponent: Story) => (
     <StoreProvider
        initialState={state}
        asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
     >
          <StoryComponent />
     </StoreProvider>
);
