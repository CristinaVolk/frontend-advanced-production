import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { Article, ArticleError } from 'entities/Article/model/types/Article';
import {
  getArticlePageLimit,
} from 'pages/ArticlePage/model/selectors/getArticlePageSelector/getArticlePageSelector';

export enum ErrorCodes {
  SERVER_DOWN = 'SERVER_DOWN'
}

export interface fetchArticlesArgs {
  _page?: number;
}

export const fetchArticles = createAsyncThunk<
  Array<Article>,
  fetchArticlesArgs,
  ThunkConfig<string>
  >(
    'articlePage/fetchArticles',
    async (args, thunkAPI) => {
      const { extra, rejectWithValue, getState } = thunkAPI;
      const { _page = 1 } = args;
      const _limit = getArticlePageLimit(getState());

      try {
        const response = await extra.api.get<Array<Article>>(
          '/articles',
          {
            params: {
              _expand: 'user',
              _page,
              _limit,
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
