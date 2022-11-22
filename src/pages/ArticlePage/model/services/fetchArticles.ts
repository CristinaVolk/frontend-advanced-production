import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { Article, ArticleError } from 'entities/Article/model/types/Article';

export enum ErrorCodes {
  SERVER_DOWN = 'SERVER_DOWN'
}

export const fetchArticles = createAsyncThunk<
  Array<Article>,
  void,
  ThunkConfig<string>
  >(
    'articlePage/fetchArticles',
    async (_, thunkAPI) => {
      const { extra, rejectWithValue } = thunkAPI;

      try {
        const response = await extra.api.get<Array<Article>>(
          '/articles',
          {
            params: {
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
