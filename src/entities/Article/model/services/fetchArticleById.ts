import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { Article, ArticleError } from '../types/Article';

export const fetchArticleById = createAsyncThunk<
  Article,
  string,
  ThunkConfig<string>
  >(
    'article/fetchArticleById',
    async (articleId, thunkAPI) => {
      const { extra, rejectWithValue } = thunkAPI;
      try {
        const response = await extra.api.get(`/articles/${articleId}`, {
          params: {
            _expand: 'user',
          },
        });

        if (!response.data) {
          throw new Error();
        }

        return response.data;
      } catch (e) {
        console.log(e);
        return rejectWithValue(ArticleError.LOADING_ERROR);
      }
    },
  );
