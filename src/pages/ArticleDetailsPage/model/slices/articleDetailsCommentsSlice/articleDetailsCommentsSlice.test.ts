import { articleDetailsCommentsReducer } from '../articleDetailsCommentsSlice/articleDetailsCommentSlice';
import { ArticleDetailsCommentsSchema } from '../../types/ArticleDetailsCommentsSchema';
import { fetchCommentsByArticleId } from '../../services/fetchCommentsByArticleId/fetchCommentsByArticleId';

describe('articleDetailsCommentsSlice.test', () => {
    test('pending state', () => {
        const state: DeepPartial<ArticleDetailsCommentsSchema> = {
            isLoading: false,
        };

        expect(
            articleDetailsCommentsReducer(
                state as ArticleDetailsCommentsSchema,
                fetchCommentsByArticleId.pending,
            ),
        ).toEqual({ isLoading: true });
    });

    // test('fetching comments with success', () => {
    //   const state: DeepPartial<ArticleDetailsCommentsSchema> = {
    //     isLoading: false,
    //     error: undefined,
    //   };
    //
    //   expect(
    //     articleDetailsCommentsReducer(
    //       state as ArticleDetailsCommentsSchema,
    //       fetchCommentsByArticleId.fulfilled,
    //     ),
    //   ).toEqual({
    //     isLoading: false,
    //     error: undefined,
    //   });
    // });

    test('fetching comments with error', () => {
        const state: DeepPartial<ArticleDetailsCommentsSchema> = {
            isLoading: false,
            error: undefined,
        };

        expect(
            articleDetailsCommentsReducer(
                state as ArticleDetailsCommentsSchema,
                fetchCommentsByArticleId.rejected(
                    new Error('error'),
                    '',
                    '',
                    'error',
                    '',
                ),
            ),
        ).toEqual({
            isLoading: false,
            error: 'error',
        });
    });
});
