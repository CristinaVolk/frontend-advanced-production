import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import {
  CommentErrorCodes,
} from 'pages/ArticleDetailsPage/model/types/ArticleDetailsCommentsSchema';
import { addCommentFormForArticle } from './addCommentFormForArticle';

describe('addCommentFormForArticle.test', () => {
  const commentBody = {
    articleId: '1',
    userId: '1',
    text: 'comment 1',
  };

  test('success data', async () => {
    const testAsyncThunk = new TestAsyncThunk(
      addCommentFormForArticle,
      {
        user: {
          authData: { id: '1', username: 'admin' },
        },
        articleDetails: {
          data: { id: '1' },
        },
      },
    );
    testAsyncThunk.api.post.mockReturnValue(Promise.resolve({ data: commentBody }));
    const result = await testAsyncThunk.callThunk(commentBody.articleId);

    expect(testAsyncThunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(commentBody);
  });

  test('rejected : No article data case', async () => {
    const testAsyncThunk = new TestAsyncThunk(
      addCommentFormForArticle,
      {
        user: {
          authData: { id: '1', username: 'admin' },
        },
        articleDetails: {
          data: undefined,
        },
      },
    );
    testAsyncThunk.api.post.mockReturnValue(Promise.reject());
    const result = await testAsyncThunk.callThunk(commentBody.articleId);

    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual(CommentErrorCodes.NO_DATA);
  });

  test('rejected case when server is down', async () => {
    const testAsyncThunk = new TestAsyncThunk(
      addCommentFormForArticle,
      {
        user: {
          authData: { id: '1', username: 'admin' },
        },
        articleDetails: {
          data: { id: '1' },
        },
      },
    );
    testAsyncThunk.api.post.mockReturnValue(Promise.reject());
    const result = await testAsyncThunk.callThunk(commentBody.articleId);

    expect(testAsyncThunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual(CommentErrorCodes.SERVER_DOWN);
  });
});
