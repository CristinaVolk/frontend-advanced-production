import { ActionCreatorWithPayload, createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import {
  useInitialEffect,
} from 'shared/lib/hooks/useAppDispatch/useInitialEffect/useInitialEffect';
import { articlePageActions } from '../../slices/articlePageSlice/articlePageSlice';
import { fetchArticles } from '../../services/fetchArticles/fetchArticles';
import {
  getArticlePageInited,
} from '../../selectors/getArticlePageSelector/getArticlePageSelector';

// type Dispatched<T> = T extends ActionCreatorWithPayload<infer R>
//   ? (args?: R) => void
//   : () => void;

// type DispatchAll<T> = {
//   [P in keyof T]: Dispatched<T[P]>;
// };

const mapParamToAction: Record<string, ActionCreatorWithPayload<any>> = {
  sort: articlePageActions.setSort,
  order: articlePageActions.setOrder,
  search: articlePageActions.setSearch,
  type: articlePageActions.setType,
};

export const initArticlesPage = createAsyncThunk<
  void,
  URLSearchParams,
  ThunkConfig<string>
  >(
    'articlePage/initArticlesPage',
    async (searchParams, thunkAPI) => {
      const { dispatch, getState } = thunkAPI;
      const isInited = getArticlePageInited(getState());

      const getParamFromUrl = (param: string) => searchParams.get(param);

      // eslint-disable-next-line guard-for-in
      for (const mapParamToActionKey in mapParamToAction) {
        const paramValue = getParamFromUrl(mapParamToActionKey);
        if (paramValue) {
          dispatch(mapParamToAction[mapParamToActionKey](paramValue));
        }
      }

      useInitialEffect(() => {
        if (!isInited) {
          dispatch(articlePageActions.initState());
          dispatch(fetchArticles({ replace: false }));
        }
      });
    },
  );
