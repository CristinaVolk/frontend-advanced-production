import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { articlePageActions } from '../../slices/articlePageSlice/articlePageSlice';
import { fetchArticles } from '../../services/fetchArticles/fetchArticles';
import {
    getArticlePageHasMore,
    getArticlePageIsLoading,
    getArticlePagePage,
} from '../../selectors/getArticlePageSelector/getArticlePageSelector';

export const fetchNextArticlePage = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>
>('articlePage/fetchNextArticlePage', async (_, thunkAPI) => {
    const { dispatch, getState } = thunkAPI;
    const hasMore = getArticlePageHasMore(getState());
    const page = getArticlePagePage(getState());
    const isLoading = getArticlePageIsLoading(getState());

    if (hasMore && !isLoading) {
        dispatch(articlePageActions.setPage(page + 1));
        dispatch(fetchArticles({ replace: false }));
    }
});
