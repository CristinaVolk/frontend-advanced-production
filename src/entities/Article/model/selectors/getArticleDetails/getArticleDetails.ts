import { StateSchema } from '@/app/providers/StoreProvider';
import { buildSelector } from '@/shared/lib/store';

export const getArticleDetailsData = (state: StateSchema) =>
    state.articleDetails?.data || undefined;

export const [getArticleDetailsHook] = buildSelector(getArticleDetailsData);

export const getArticleDetailsError = (state: StateSchema) =>
    state.articleDetails?.error || undefined;

export const getArticleDetailsIsLoading = (state: StateSchema) =>
    state.articleDetails?.isLoading || false;
