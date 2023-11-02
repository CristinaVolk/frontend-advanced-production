import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames';
import { Input } from '@/shared/ui/deprecated/Input';
import { Card } from '@/shared/ui/deprecated/Card';
import { ArticleListViewSwitcher } from '@/features/ArticleListViewSwitcher';
import classes from './ArticlePageFilter.module.scss';
import { ArticleSortSelector } from '@/features/ArticleSortSelector';
import { ArticleTypedTabs } from '@/features/ArticleTypedTabs';
import { useArticleFilters } from '../../lib/hooks/useArticleFilters';

interface ArticlePageFilterProps {
    className?: string;
}

export const ArticlePageFilter = memo((props: ArticlePageFilterProps) => {
    const { className } = props;

    const { t } = useTranslation('article');
    const {
        order,
        sort,
        view,
        search,
        type,
        onChangeOrder,
        onChangeSearch,
        onChangeTab,
        onChangeSort,
        onChangeView,
    } = useArticleFilters();

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
