import React, { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { classNames } from '@/shared/lib/classNames';
import { Input } from '@/shared/ui/Input/Input';
import { Card } from '@/shared/ui/Card/Card';
import { ArticleSortSelector } from '@/shared/ui/ArticleSortSelector/ArticleSortSelector';
import { SortOrder } from '@/shared/types/Order';
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce';
import { TabItem } from '@/shared/ui/Tabs/Tabs';

import {
  ArticleSortFieldType, ArticleType, ArticleTypedTabs, ArticleView,
} from '@/entities/Article';
import { ArticleListViewSwitcher } from '@/features/ArticleListViewSwitcher';
import { fetchArticles } from '../../model/services/fetchArticles/fetchArticles';
import {
  getArticlePageOrder,
  getArticlePageSearch,
  getArticlePageSort,
  getArticlePageType,
  getArticlePageView,
} from '../../model/selectors/getArticlePageSelector/getArticlePageSelector';
import { articlePageActions } from '../../model/slices/articlePageSlice/articlePageSlice';
import classes from './ArticlePageFilter.module.scss';

interface ArticlePageFilterProps {
  className?: string;
}

export const ArticlePageFilter = memo((props: ArticlePageFilterProps) => {
  const { className } = props;
  const view = useSelector(getArticlePageView) || ArticleView.TILE;
  const sort = useSelector(getArticlePageSort);
  const order = useSelector(getArticlePageOrder);
  const search = useSelector(getArticlePageSearch);
  const type = useSelector(getArticlePageType);

  const dispatch = useAppDispatch();
  const { t } = useTranslation('article');

  const fetchData = useCallback(() => {
    dispatch(fetchArticles({ replace: true }));
  }, [dispatch]);

  const onChangeView = useCallback((value: ArticleView) => {
    dispatch(articlePageActions.setView(value));
    dispatch(articlePageActions.setPage(1));
  }, [dispatch]);

  const onChangeSort = useCallback((value: ArticleSortFieldType) => {
    dispatch(articlePageActions.setSort(value));
    dispatch(articlePageActions.setPage(1));
    fetchData();
  }, [fetchData, dispatch]);

  const onChangeOrder = useCallback((value: SortOrder) => {
    dispatch(articlePageActions.setOrder(value));
    dispatch(articlePageActions.setPage(1));
    fetchData();
  }, [fetchData, dispatch]);

  const debouncedFetch = useDebounce(fetchData, 3000);

  const onChangeSearch = useCallback((value: string) => {
    dispatch(articlePageActions.setSearch(value));
    dispatch(articlePageActions.setPage(1));
    debouncedFetch();
  }, [debouncedFetch, dispatch]);

  const onChangeTab = useCallback((tab: TabItem<ArticleType>) => {
    dispatch(articlePageActions.setType(tab.value));
    dispatch(articlePageActions.setPage(1));
    fetchData();
  }, [dispatch, fetchData]);

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
