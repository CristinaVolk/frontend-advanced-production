import React, { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { classNames } from '@/shared/lib/classNames';
import { Input } from '@/shared/ui/deprecated/Input';
import { Card } from '@/shared/ui/deprecated/Card';
import { SortOrder } from '@/shared/types/Order';
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce';
import { TabItem } from '@/shared/ui/deprecated/Tabs';

import { ArticleType, ArticleView } from '@/entities/Article';
import { ArticleListViewSwitcher } from '@/features/ArticleListViewSwitcher';
import { fetchArticles } from '../../model/services/fetchArticles/fetchArticles';
import {
    getArticleOrderHook,
    getArticlePageSortHook,
    getArticlePageViewHook,
    getArticleTypeHook,
    getPageSearchHook,
} from '../../model/selectors/getArticlePageSelector/getArticlePageSelector';
import { useArticlePageActions } from '../../model/slices/articlePageSlice/articlePageSlice';
import classes from './ArticlePageFilter.module.scss';
import { ArticleSortFieldType } from '@/shared/types/article';
import { ArticleSortSelector } from '@/features/ArticleSortSelector';
import { ArticleTypedTabs } from '@/features/ArticleTypedTabs';

interface ArticlePageFilterProps {
    className?: string;
}

export const ArticlePageFilter = memo((props: ArticlePageFilterProps) => {
    const { className } = props;
    const view = getArticlePageViewHook() || ArticleView.TILE;
    const sort = getArticlePageSortHook();
    const order = getArticleOrderHook();
    const search = getPageSearchHook();
    const type = getArticleTypeHook();
    const { setPage, setOrder, setSort, setView, setType, setSearch } =
        useArticlePageActions();

    const dispatch = useAppDispatch();
    const { t } = useTranslation('article');

    const fetchData = useCallback(() => {
        dispatch(fetchArticles({ replace: true }));
    }, [dispatch]);

    const onChangeView = useCallback(
        (value: ArticleView) => {
            setView(value);
            setPage(1);
        },
        [setView, setPage],
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

    return (
        <div className={classNames(classes.ArticlePageFilter, {}, [className])}>
            <div className={classes.softWrapper}>
                <ArticleSortSelector
                    order={order}
                    sort={sort}
                    onChangeSort={onChangeSort}
                    onChangeOrder={onChangeOrder}
                />
                <ArticleListViewSwitcher
                    view={view}
                    onViewClick={onChangeView}
                />
            </div>
            <Card className={classes.search}>
                <Input
                    value={search}
                    placeholder={t('search')}
                    onChange={onChangeSearch}
                />
            </Card>
            <ArticleTypedTabs type={type} onChangeType={onChangeTab} />
        </div>
    );
});
