import { Story } from '@storybook/react';
import { ReducersMapObject } from '@reduxjs/toolkit';

import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { loginReducer } from 'features/AuthByUsername/model/slices/loginSlice';
import { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { editableProfileCardReducer } from 'features/EditableProfileCard';
import { articleDetailsReducer } from 'entities/Article';
import { addCommentFormReducer } from 'features/AddCommentForm/model/slices/addCommentFormSlice';
import {
  articleDetailsCommentsReducer,
} from 'pages/ArticleDetailsPage/model/slices/articleDetailsCommentsSlice/articleDetailsCommentSlice';

const defaultAsyncReducers: ReducersList = {
  loginForm: loginReducer,
  editableProfileCard: editableProfileCardReducer,
  articleDetails: articleDetailsReducer,
  articleDetailsComments: articleDetailsCommentsReducer,
  addCommentForm: addCommentFormReducer,
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
