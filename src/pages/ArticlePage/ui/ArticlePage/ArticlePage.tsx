import React, { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames';
import { ArticleList } from 'entities/Article';
import {
  DynamicModuleLoader, ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
  useInitialEffect,
} from 'shared/lib/hooks/useAppDispatch/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ArticleListViewSwitcher } from 'features/ArticleListViewSwitcher';
import { ArticleView } from 'entities/Article/model/types/Article';
import { Page } from 'shared/ui/Page/Page';
import {
  fetchNextArticlePage,
} from 'pages/ArticlePage/model/services/fetchNextArticlePage/fetchNextArticlePage';
import { fetchArticles } from '../../model/services/fetchArticles/fetchArticles';
import {
  getArticlePageIsLoading, getArticlePageView,
} from '../../model/selectors/getArticlePageSelector/getArticlePageSelector';
import {
  articlePageActions, articlePageReducer, getArticles,
} from '../../model/slices/articlePageSlice/articlePageSlice';
import classes from './ArticlePage.module.scss';

interface ArticlePageProps {
	className?: string;
}
const reducers: ReducersList = {
  articlePage: articlePageReducer,
};

const ArticlePage = memo((props: ArticlePageProps) => {
  const { className } = props;
  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlePageIsLoading);
  const view = useSelector(getArticlePageView) || ArticleView.TILE;
  const dispatch = useAppDispatch();

  const onChangeView = useCallback((value: ArticleView) => {
    dispatch(articlePageActions.setView(value));
  }, [dispatch]);

  const onLoadPageNext = useCallback(() => {
    dispatch(fetchNextArticlePage());
  }, [dispatch]);

  useInitialEffect(() => {
    dispatch(articlePageActions.initState());
    dispatch(fetchArticles({ _page: 1 }));
  });

  return (
       <DynamicModuleLoader reducers={reducers}>
            <Page
               onScrollEnd={onLoadPageNext}
               className={classNames(classes.ArticlePage, {}, [className])}
            >
                 <ArticleListViewSwitcher view={view} onViewClick={onChangeView} />
                 <ArticleList
                    view={view}
                    articles={articles}
                    isLoading={isLoading}
                 />
            </Page>
       </DynamicModuleLoader>

  );
});

export default ArticlePage;
