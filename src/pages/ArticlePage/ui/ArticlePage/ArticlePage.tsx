import React, { memo, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Page } from '@/widgets/Page';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { ArticleInfiniteList } from '../ArticleInfiniteList/ArticleInfiniteList';
import { fetchNextArticlePage } from '../../model/services/fetchNextArticlePage/fetchNextArticlePage';
import { ArticlePageFilter } from '../ArticlePageFilter/ArticlePageFilter';
import { articlePageReducer } from '../../model/slices/articlePageSlice/articlePageSlice';
import classes from './ArticlePage.module.scss';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ArticlesPageGreeting } from '@/features/ArticlesPageGreeting';
import { ToggleFeatures } from '@/shared/lib/features';
import { ViewSelectorContainer } from '../ViewSelectorContainer/ViewSelectorContainer';
import { FiltersContainer } from '../FiltersContainer/FiltersContainer';
import { StickyContentLayout } from '@/shared/layouts/StickyContentLayout';

interface ArticlePageProps {
    className?: string;
}
const reducers: ReducersList = {
    articlePage: articlePageReducer,
};

const ArticlePage = memo((props: ArticlePageProps) => {
    const { className } = props;
    const dispatch = useAppDispatch();
    const [searchParams] = useSearchParams();

    const onLoadPageNext = useCallback(async () => {
        dispatch(fetchNextArticlePage());
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(initArticlesPage(searchParams));
    });

    const contentPage = (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <StickyContentLayout
                    left={<ViewSelectorContainer />}
                    right={<FiltersContainer />}
                    content={
                        <Page
                            data-testid="ArticlePage"
                            onScrollEnd={onLoadPageNext}
                            className={classNames(
                                classes.ArticlePageRedesigned,
                                {},
                                [className],
                            )}
                        >
                            <ArticleInfiniteList className={classes.list} />
                            <ArticlesPageGreeting />
                        </Page>
                    }
                />
            }
            off={
                <Page
                    data-testid="ArticlePage"
                    onScrollEnd={onLoadPageNext}
                    className={classNames(classes.ArticlePage, {}, [className])}
                >
                    <ArticlePageFilter />
                    <ArticleInfiniteList className={classes.list} />
                    <ArticlesPageGreeting />
                </Page>
            }
        />
    );

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            {contentPage}
        </DynamicModuleLoader>
    );
});

export default ArticlePage;
