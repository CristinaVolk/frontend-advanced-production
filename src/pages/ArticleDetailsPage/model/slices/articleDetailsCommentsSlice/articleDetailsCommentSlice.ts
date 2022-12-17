import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Comment } from '@/entities/Comment';
import { StateSchema } from '@/app/providers/StoreProvider';
import { ArticleDetailsCommentsSchema } from '../../types/ArticleDetailsCommentsSchema';
import {
  fetchCommentsByArticleId,
} from '../../services/fetchCommentsByArticleId/fetchCommentsByArticleId';

const commentsAdapter = createEntityAdapter<Comment>({
  selectId: (comment) => comment.id,
});

export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
  (state) => state.articleDetailsPage?.comments
    || commentsAdapter.getInitialState(),
);

const articleDetailsCommentSlice = createSlice({
  name: 'articleDetailsCommentsSlice',
  initialState: commentsAdapter.getInitialState<ArticleDetailsCommentsSchema>({
    isLoading: false,
    error: undefined,
    ids: ['1', '2'],
    entities: {
      1: {
        id: '1',
        text: 'comment 1',
        user: {
          id: '1',
          username: 'admin@admin.com',
          avatar: 'https://i1.sndcdn.com/avatars-000756121903-98y986-t500x500.jpg',
        },
      },
      2: {
        id: '2',
        text: 'comment 2',
        user: {
          id: '1',
          username: 'admin@admin.com',
          avatar: 'https://i1.sndcdn.com/avatars-000756121903-98y986-t500x500.jpg',
        },
      },
    },
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCommentsByArticleId.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchCommentsByArticleId.fulfilled, (state, action) => {
        state.isLoading = false;
        commentsAdapter.setAll(state, action.payload);
      })
      .addCase(
        fetchCommentsByArticleId.rejected,
        (state, action: PayloadAction<string | undefined>) => {
          state.isLoading = false;
          state.error = action.payload;
        },
      );
  },
});

export const { reducer: articleDetailsCommentsReducer } = articleDetailsCommentSlice;
