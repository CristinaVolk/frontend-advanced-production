import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider/config/StateSchema';
import { Comment } from '@/entities/Comment';
import { ArticleError } from '@/entities/Article';

export const fetchCommentsByArticleId = createAsyncThunk<
  Array<Comment>,
  string | undefined,
  ThunkConfig<string>
  >(
    'articleDetails/fetchCommentsByArticleId',
    async (articleId, thunkAPI) => {
      const { extra, rejectWithValue } = thunkAPI;

      if (!articleId) {
        rejectWithValue('No article id provided');
      }

      try {
        const response = await extra.api.get<Array<Comment>>(
          '/comments',
          {
            params: {
              articleId,
              _expand: 'user',
            },
          },
        );

        if (!response.data) {
          throw new Error();
        }

        return response.data;
      } catch (e) {
        return rejectWithValue(ArticleError.LOADING_ERROR);
      }
    },
  );
