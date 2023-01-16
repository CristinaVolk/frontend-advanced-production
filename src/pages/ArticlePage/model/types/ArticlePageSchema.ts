import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleType, ArticleView } from '@/entities/Article';
import { SortOrder } from '@/shared/types/Order';
import { ArticleSortFieldType } from '@/shared/types/article';

export interface ArticlePageSchema extends EntityState<Article> {
    isLoading?: boolean;
    error?: string;
    view: ArticleView;

    // pagination
    page: number;
    limit?: number;
    hasMore: boolean;

    // filters
    order: SortOrder;
    sort: ArticleSortFieldType;
    search: string;
    type: ArticleType;

    _inited: boolean;
}
