import { useCallback } from 'react';
import {
    getArticleOrderHook,
    getArticlePageSortHook,
    getArticlePageViewHook,
    getArticleTypeHook,
    getPageSearchHook,
} from '../../model/selectors/getArticlePageSelector/getArticlePageSelector';
import { ArticleType, ArticleView } from '@/entities/Article';
import { useArticlePageActions } from '../../model/slices/articlePageSlice/articlePageSlice';
import { ArticleSortFieldType } from '@/shared/types/article';
import { SortOrder } from '@/shared/types/Order';
import { fetchArticles } from '../../model/services/fetchArticles/fetchArticles';
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce';
import { TabItem } from '@/shared/ui/deprecated/Tabs';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';

export function useArticleFilters() {
    const view = getArticlePageViewHook() || ArticleView.TILE;
    const sort = getArticlePageSortHook();
    const order = getArticleOrderHook();
    const search = getPageSearchHook();
    const type = getArticleTypeHook();
    const { setPage, setOrder, setSort, setView, setType, setSearch } =
        useArticlePageActions();
    const dispatch = useAppDispatch();

    const fetchData = useCallback(() => {
        dispatch(fetchArticles({ replace: true }));
    }, [dispatch]);

    const onChangeView = useCallback(
        (view: ArticleView) => {
            setView(view);
        },
        [setView],
    );

    const onChangeSort = useCallback(
        (value: ArticleSortFieldType) => {
            setSort(value);
            setPage(1);
            fetchData();
        },
        [fetchData, setPage, setSort],
    );

    const onChangeOrder = useCallback(
        (value: SortOrder) => {
            setOrder(value);
            setPage(1);
            fetchData();
        },
        [fetchData, setOrder, setPage],
    );

    const debouncedFetch = useDebounce(fetchData, 3000);

    const onChangeSearch = useCallback(
        (value: string) => {
            setSearch(value);
            setPage(1);
            debouncedFetch();
        },
        [debouncedFetch, setPage, setSearch],
    );

    const onChangeTab = useCallback(
        (tab: TabItem<ArticleType>) => {
            setType(tab.value);
            setPage(1);
            fetchData();
        },
        [fetchData, setPage, setType],
    );

    return {
        sort,
        type,
        search,
        view,
        order,
        onChangeOrder,
        onChangeView,
        onChangeSort,
        onChangeTab,
        onChangeSearch,
    };
}
