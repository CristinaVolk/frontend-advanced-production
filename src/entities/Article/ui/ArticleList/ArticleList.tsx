import React, { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames';
import { Text, TextSize } from '@/shared/ui/deprecated/Text';
import { ArticleView } from '../../model/const/const';
import { Article } from '../../model/types/Article';
import { ArticleListItem } from '../../ui/ArticleListItem/ArticleListItem';

import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import classes from './ArticleList.module.scss';

interface ArticleListProps {
    className?: string;
    articles: Array<Article>;
    isLoading?: boolean;
    view?: ArticleView;
    target?: HTMLAttributeAnchorTarget;
}

const getSkeletons = (view: ArticleView) =>
    new Array(view === ArticleView.TILE ? 9 : 3).fill(0).map((item, index) => (
        <ArticleListItemSkeleton
            className={classes.card}
            /* eslint-disable-next-line react/no-array-index-key */
            key={index}
            view={view}
        />
    ));

export const ArticleList = memo((props: ArticleListProps) => {
    const {
        className,
        articles,
        isLoading,
        view = ArticleView.TILE,
        target,
    } = props;

    const { t } = useTranslation('article');

    if (!isLoading && !articles.length) {
        return (
            <div
                className={classNames(classes.ArticleList, {}, [
                    className,
                    classes[view],
                ])}
                data-testid="ArticleList"
            >
                <Text size={TextSize.L} title={t('not-found-articles')} />
            </div>
        );
    }

    return (
        <div
            data-testid="ArticleList"
            className={classNames(classes.ArticleList, {}, [
                className,
                classes[view],
            ])}
        >
            {articles.map((item) => (
                <ArticleListItem
                    article={item}
                    view={view}
                    target={target}
                    key={item.id}
                    className={classes.card}
                />
            ))}
            {isLoading && getSkeletons(view)}
        </div>
    );
});
