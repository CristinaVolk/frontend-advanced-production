import {
  articleDetailsCommentsReducer,
} from '../articleDetailsCommentsSlice/articleDetailsCommentSlice';
import { ArticleDetailsCommentsSchema } from '../../types/ArticleDetailsCommentsSchema';
import {
  fetchCommentsByArticleId,
} from '../../services/fetchCommentsByArticleId/fetchCommentsByArticleId';

describe('addCommentFormSlice.test', () => {
  test('pending state', () => {
    const state: DeepPartial<ArticleDetailsCommentsSchema> = {
      isLoading: false,
    };

    expect(articleDetailsCommentsReducer(
      state as ArticleDetailsCommentsSchema,
      fetchCommentsByArticleId.pending,
    )).toEqual({ isLoading: true });
  });

  // test('with error', () => {
  //   const state: DeepPartial<ArticleDetailsCommentsSchema> = {
  //     isLoading: true,
  //     error: undefined,
  //   };
  //
  //   expect(articleDetailsCommentsReducer(
  //     state as ArticleDetailsCommentsSchema,
  //     fetchCommentsByArticleId.rejected,
  //   )).toEqual({ isLoading: false, error: undefined });
  // });
});
