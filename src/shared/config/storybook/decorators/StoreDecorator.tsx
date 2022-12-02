import { Story } from '@storybook/react';
import { ReducersMapObject } from '@reduxjs/toolkit';

import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { loginReducer } from 'features/AuthByUsername/model/slices/loginSlice';
import { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { editableProfileCardReducer } from 'features/EditableProfileCard';
import { articleDetailsReducer } from 'entities/Article';
import { addCommentFormReducer } from 'features/AddCommentForm/model/slices/addCommentFormSlice';
import { articleDetailsPageReducer } from 'pages/ArticleDetailsPage/model/slices';

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
