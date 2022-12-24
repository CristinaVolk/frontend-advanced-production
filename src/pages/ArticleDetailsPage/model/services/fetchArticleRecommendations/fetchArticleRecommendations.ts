import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Article } from '@/entities/Article';
import { ErrorCodes } from '@/shared/const/common';

export const fetchArticleRecommendations = createAsyncThunk<
  Array<Article>,
  void,
  ThunkConfig<string>
  >(
    'articlePage/fetchArticleRecommendations',
    async (_, thunkAPI) => {
      const { extra, rejectWithValue } = thunkAPI;

      try {
        const response = await extra.api.get<Array<Article>>(
          '/articles',
          {
            params: {
              _expand: 'user',
              _limit: '4',
            },
          },
        );

        if (!response.data) {
          throw new Error();
        }

        return response.data;
      } catch (e) {
        return rejectWithValue(ErrorCodes.SERVER_DOWN);
      }
    },
  );
