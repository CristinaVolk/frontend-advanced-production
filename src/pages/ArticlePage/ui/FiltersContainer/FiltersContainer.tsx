import React, { memo } from 'react';
import { ArticlesFilters } from '@/widgets/ArticlesFilters';
import { useArticleFilters } from '../../lib/hooks/useArticleFilters';

interface FiltersContainerProps {
    className?: string;
}

export const FiltersContainer = memo((props: FiltersContainerProps) => {
    const { className } = props;
    const {
        order,
        sort,
        search,
        type,
        onChangeOrder,
        onChangeSearch,
        onChangeTab,
        onChangeSort,
    } = useArticleFilters();

    return (
        <ArticlesFilters
            className={className}
            sort={sort}
            search={search}
            type={type}
            order={order}
            onChangeTab={onChangeTab}
            onChangeOrder={onChangeOrder}
            onChangeSearch={onChangeSearch}
            onChangeSort={onChangeSort}
        />
    );
});
