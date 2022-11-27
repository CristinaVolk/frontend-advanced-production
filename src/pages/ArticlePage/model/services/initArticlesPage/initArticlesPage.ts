import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import {
  useInitialEffect,
} from 'shared/lib/hooks/useAppDispatch/useInitialEffect/useInitialEffect';
import { articlePageActions } from '../../slices/articlePageSlice/articlePageSlice';
import { fetchArticles } from '../../services/fetchArticles/fetchArticles';
import {
  getArticlePageInited,
} from '../../selectors/getArticlePageSelector/getArticlePageSelector';

export const initArticlesPage = createAsyncThunk<
  void,
  void,
  ThunkConfig<string>
  >(
    'articlePage/initArticlesPage',
    async (_, thunkAPI) => {
      const { dispatch, getState } = thunkAPI;
      const isInited = getArticlePageInited(getState());

      useInitialEffect(() => {
        if (!isInited) {
          dispatch(articlePageActions.initState());
          dispatch(fetchArticles({ _page: 1 }));
        }
      });
    },
  );
