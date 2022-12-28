import { Story } from '@storybook/react';
import { ReducersMapObject } from '@reduxjs/toolkit';

import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import { ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { editableProfileCardReducer } from '@/features/EditableProfileCard/testing';
import { articleDetailsReducer } from '@/entities/Article/testing';
import { addCommentFormReducer } from '@/features/AddCommentForm/testing';
import { articleDetailsPageReducer } from '@/pages/ArticleDetailsPage/testing';
import { loginReducer } from '@/features/AuthByUsername/testing';

const defaultAsyncReducers: ReducersList = {
  loginForm: loginReducer,
  editableProfileCard: editableProfileCardReducer,
  articleDetails: articleDetailsReducer,
  addCommentForm: addCommentFormReducer,
  articleDetailsPage: articleDetailsPageReducer,
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
