import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames';

import classes from './ArticlesFilters.module.scss';
import { Card } from '@/shared/ui/redesigned/Card';
import { ArticleSortSelector } from '@/features/ArticleSortSelector';
import { Input } from '@/shared/ui/redesigned/Input';
import { ArticleTypedTabs } from '@/features/ArticleTypedTabs';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { SortOrder } from '@/shared/types/Order';
import { ArticleSortFieldType } from '@/shared/types/article';
import { TabItem } from '@/shared/ui/deprecated/Tabs';
import { ArticleType } from '@/entities/Article';
import { Icon } from '@/shared/ui/redesigned/Icon';
import SearchIcon from '@/shared/assets/icons/search.svg';

interface ArticlesFiltersProps {
    className?: string;
    order: SortOrder;
    sort: ArticleSortFieldType;
    type: string;
    search: string;
    onChangeSort: (newSort: ArticleSortFieldType) => void;
    onChangeSearch: (value: string) => void;
    onChangeOrder: (newOrder: SortOrder) => void;
    onChangeTab: (value: TabItem<ArticleType>) => void;
}

export const ArticlesFilters = memo((props: ArticlesFiltersProps) => {
    const { t } = useTranslation();
    const {
        className,
        order,
        sort,
        type,
        search,
        onChangeSort,
        onChangeOrder,
        onChangeSearch,
        onChangeTab,
    } = props;

    return (
        <Card className={classNames(classes.ArticlesFilters, {}, [className])}>
            <VStack gap="32">
                <Input
                    value={search}
                    placeholder={t('search')}
                    onChange={onChangeSearch}
                    addonLeft={<Icon Svg={SearchIcon} />}
                />
                <ArticleTypedTabs type={type} onChangeType={onChangeTab} />
                <ArticleSortSelector
                    order={order}
                    sort={sort}
                    onChangeSort={onChangeSort}
                    onChangeOrder={onChangeOrder}
                />
            </VStack>
        </Card>
    );
});
