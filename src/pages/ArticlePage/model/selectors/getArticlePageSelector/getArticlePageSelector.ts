import { StateSchema } from '@/app/providers/StoreProvider';
import { ArticleSortField, ArticleType } from '@/entities/Article';

export const getArticlePageIsLoading = ((
  state:StateSchema,
) => state.articlePage?.isLoading || false);

export const getArticlePageError = ((
  state:StateSchema,
) => state.articlePage?.error || undefined);

export const getArticlePageView = ((
  state:StateSchema,
) => state.articlePage?.view);

export const getArticlePagePage = ((
  state:StateSchema,
) => state.articlePage?.page ?? 0);

export const getArticlePageHasMore = ((
  state:StateSchema,
) => state.articlePage?.hasMore);

export const getArticlePageLimit = ((
  state:StateSchema,
) => state.articlePage?.limit || 9);

export const getArticlePageInited = ((
  state:StateSchema,
) => state.articlePage?._inited);

export const getArticlePageSort = ((
  state:StateSchema,
) => state.articlePage?.sort ?? ArticleSortField.CREATED);

export const getArticlePageOrder = ((
  state:StateSchema,
) => state.articlePage?.order ?? 'asc');

export const getArticlePageSearch = ((
  state:StateSchema,
) => state.articlePage?.search ?? '');

export const getArticlePageType = ((
  state:StateSchema,
) => state.articlePage?.type ?? ArticleType.ALL);
