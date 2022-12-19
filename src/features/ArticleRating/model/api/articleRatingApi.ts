import { rtkApi } from '@/shared/api/rtkApi';
import { RatingSchema } from '@/entities/Rating';

interface GetArticleRatingArg {
  userId: string;
  articleId: string;
}

interface RateArticleArg {
  userId: string;
  articleId: string;
  rate: number;
  feedback?: string;
}

export const articleRatingApi = rtkApi.injectEndpoints({
  endpoints: (build) => (
    {
      getArticleRating: build.query<
        RatingSchema[],
        GetArticleRatingArg
        >({
          query: ({ userId, articleId }) => (
            {
              url: '/article-rating',
              params: {
                userId,
                articleId,
              },
            }
          ),
        }),
      rateArticle: build.mutation<
        void,
        RateArticleArg
        >({
          query: (arg) => (
            {
              url: '/article-rating',
              method: 'POST',
              body: arg,
            }
          ),
        }),
    }
  ),
});

export const useGetArticleRating = articleRatingApi.useGetArticleRatingQuery;
export const useRateArticle = articleRatingApi.useRateArticleMutation;
