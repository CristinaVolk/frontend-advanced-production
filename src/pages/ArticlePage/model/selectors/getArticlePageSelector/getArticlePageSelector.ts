import { StateSchema } from '@/app/providers/StoreProvider';
import { ArticleType } from '@/entities/Article';
import { ArticleSortField } from '@/shared/const/article';
import { buildSelector } from '@/shared/lib/store';

export const getArticlePageIsLoading = (state: StateSchema) =>
    state.articlePage?.isLoading || false;

export const [getArticlePageIsLoadingHook] = buildSelector(
    getArticlePageIsLoading,
);

export const getArticlePageError = (state: StateSchema) =>
    state.articlePage?.error || undefined;

export const [getArticlePageErrorHook] = buildSelector(getArticlePageError);

export const getArticlePageView = (state: StateSchema) =>
    state.articlePage?.view;

export const [getArticlePageViewHook] = buildSelector(getArticlePageView);

export const getArticlePagePage = (state: StateSchema) =>
    state.articlePage?.page ?? 0;

export const [getArticlePagePageHook] = buildSelector(getArticlePagePage);

export const getArticlePageHasMore = (state: StateSchema) =>
    state.articlePage?.hasMore;

export const [getArticlePageHasMoreHook] = buildSelector(getArticlePageHasMore);

export const getArticlePageLimit = (state: StateSchema) =>
    state.articlePage?.limit || 9;

export const [getArticlePageLimitHook] = buildSelector(getArticlePageLimit);

export const getArticlePageInited = (state: StateSchema) =>
    state.articlePage?._inited;

export const [getArticlePageInitedHook] = buildSelector(getArticlePageInited);

export const getArticlePageSort = (state: StateSchema) =>
    state.articlePage?.sort ?? ArticleSortField.CREATED;

export const [getArticlePageSortHook] = buildSelector(getArticlePageSort);

export const getArticlePageOrder = (state: StateSchema) =>
    state.articlePage?.order ?? 'asc';

export const [getArticleOrderHook] = buildSelector(getArticlePageOrder);

export const getArticlePageSearch = (state: StateSchema) =>
    state.articlePage?.search ?? '';

export const [getPageSearchHook] = buildSelector(getArticlePageSearch);

export const getArticlePageType = (state: StateSchema) =>
    state.articlePage?.type ?? ArticleType.ALL;

export const [getArticleTypeHook] = buildSelector(getArticlePageType);

export const [useArticleItemById] = buildSelector(
    (state, id: string) => state.articlePage?.entities[id],
);
