import React, { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames';
import {
  DynamicModuleLoader, ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Page } from 'shared/ui/Page/Page';
import { ArticleInfiniteList } from '../ArticleInfiniteList/ArticleInfiniteList';
import {
  fetchNextArticlePage,
} from '../../model/services/fetchNextArticlePage/fetchNextArticlePage';
import { ArticlePageFilter } from '../ArticlePageFilter/ArticlePageFilter';
import { articlePageReducer } from '../../model/slices/articlePageSlice/articlePageSlice';
import classes from './ArticlePage.module.scss';

interface ArticlePageProps {
	className?: string;
}
const reducers: ReducersList = {
  articlePage: articlePageReducer,
};

const ArticlePage = memo((props: ArticlePageProps) => {
  const { className } = props;
  const dispatch = useAppDispatch();

  const onLoadPageNext = useCallback(() => {
    dispatch(fetchNextArticlePage());
  }, [dispatch]);

  return (
       <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <Page
               onScrollEnd={onLoadPageNext}
               className={classNames(classes.ArticlePage, {}, [className])}
            >
                 <ArticlePageFilter />
                 <ArticleInfiniteList className={classes.list} />

            </Page>
       </DynamicModuleLoader>
  );
});

export default ArticlePage;
