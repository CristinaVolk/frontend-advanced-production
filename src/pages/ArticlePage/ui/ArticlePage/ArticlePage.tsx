import React, { memo, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
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
import { ArticleView } from 'entities/Article/model/types/Article';
import { Page } from 'shared/ui/Page/Page';
import {
  fetchNextArticlePage,
} from 'pages/ArticlePage/model/services/fetchNextArticlePage/fetchNextArticlePage';
import {
  initArticlesPage,
} from 'pages/ArticlePage/model/services/initArticlesPage/initArticlesPage';
import { ArticlePageFilter } from '../ArticlePageFilter/ArticlePageFilter';
import {
  getArticlePageIsLoading, getArticlePageView,
} from '../../model/selectors/getArticlePageSelector/getArticlePageSelector';
import {
  articlePageReducer, getArticles,
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
  const [searchParams] = useSearchParams();

  const onLoadPageNext = useCallback(() => {
    dispatch(fetchNextArticlePage());
  }, [dispatch]);

  useInitialEffect(() => {
    console.log(searchParams);
    dispatch(initArticlesPage(searchParams));
  });

  return (
       <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <Page
               onScrollEnd={onLoadPageNext}
               className={classNames(classes.ArticlePage, {}, [className])}
            >
                 <ArticlePageFilter />
                 <ArticleList
                    className={classes.list}
                    view={view}
                    articles={articles}
                    isLoading={isLoading}
                 />
            </Page>
       </DynamicModuleLoader>

  );
});

export default ArticlePage;
