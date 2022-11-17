import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { fetchCommentsByArticleId } from './fetchCommentsByArticleId';

describe('fetchCommentsByArticleId.test', () => {
  const articleId = '1';

  test('success fetching comments success', async () => {
    const commentsList = [
      {
        user: {
          username: 'admin@admin.com',
          id: '1',
        },
        text: 'hh',
        id: 'GQxGZ9P',
      },
      {
        user: {
          username: 'admin@admin.com',
          id: '1',
        },
        text: '666',
        id: 'UZ8-BvO',
      },
    ];

    const thunk = new TestAsyncThunk(fetchCommentsByArticleId);
    thunk.api.get.mockReturnValue(Promise.resolve({ data: commentsList }));
    const result = await thunk.callThunk(articleId);

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(commentsList);
  });

  test('fetching comments failed', async () => {
    const testAsyncThunk = new TestAsyncThunk(fetchCommentsByArticleId);
    testAsyncThunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));

    const result = await testAsyncThunk.callThunk(articleId);
    expect(testAsyncThunk.dispatch).toHaveBeenCalledTimes(2);
    expect(testAsyncThunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe('loading-error');
  });
});
