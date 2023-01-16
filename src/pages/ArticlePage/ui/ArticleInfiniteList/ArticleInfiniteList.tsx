import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames';
import { Text } from '@/shared/ui/Text';
import { ArticleList, ArticleView } from '@/entities/Article';

import {
    getArticlePageErrorHook,
    getArticlePageIsLoadingHook,
    getArticlePageViewHook,
} from '../../model/selectors/getArticlePageSelector/getArticlePageSelector';
import { getArticles } from '../../model/slices/articlePageSlice/articlePageSlice';

interface ArticleInfiniteListProps {
    className?: string;
}

export const ArticleInfiniteList = memo((props: ArticleInfiniteListProps) => {
    const { className } = props;
    const articles = useSelector(getArticles.selectAll);
    const isLoading = getArticlePageIsLoadingHook();
    const view = getArticlePageViewHook() || ArticleView.TILE;
    const error = getArticlePageErrorHook();

    const { t } = useTranslation('article');

    if (error) {
        return <Text text={t('error')} />;
    }

    return (
        <ArticleList
            articles={articles}
            isLoading={isLoading}
            view={view}
            className={classNames('', {}, [className])}
        />
    );
});
