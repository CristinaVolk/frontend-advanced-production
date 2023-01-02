import { StateSchema } from '@/app/providers/StoreProvider';
import { buildSelector } from '@/shared/lib/store';

export const getArticleDetailsCommentsIsLoading = ((
  state:StateSchema,
) => state.articleDetailsPage?.comments.isLoading || false);

export const [getArticleDetailsCommentsIsLoadingHook] = buildSelector(getArticleDetailsCommentsIsLoading);

export const getArticleDetailsCommentsError = ((
  state:StateSchema,
) => state.articleDetailsPage?.comments.error || undefined);
