import React, { memo } from 'react';
import { ArticleListViewSwitcher } from '@/features/ArticleListViewSwitcher';
import { useArticleFilters } from '../../lib/hooks/useArticleFilters';

interface ViewSelectorContainerProps {
    className?: string;
}

export const ViewSelectorContainer = memo(
    (props: ViewSelectorContainerProps) => {
        const { className } = props;

        const { view, onChangeView } = useArticleFilters();

        return (
            <ArticleListViewSwitcher
                className={className}
                view={view}
                onViewClick={onChangeView}
            />
        );
    },
);
