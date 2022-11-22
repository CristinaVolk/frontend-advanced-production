import { StateSchema } from 'app/providers/StoreProvider';

export const getArticlePageIsLoading = ((
  state:StateSchema,
) => state.articlePage?.isLoading || false);

export const getArticlePageError = ((
  state:StateSchema,
) => state.articlePage?.error || undefined);

export const getArticlePageView = ((
  state:StateSchema,
) => state.articlePage?.view);
