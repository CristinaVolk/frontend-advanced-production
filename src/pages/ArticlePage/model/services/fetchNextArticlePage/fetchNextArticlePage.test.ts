import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { fetchNextArticlePage } from './fetchNextArticlePage';
import { fetchArticles } from '../fetchArticles/fetchArticles';

jest.mock('../fetchArticles/fetchArticles');

describe('fetchNextArticlePage.test', () => {
  test('success fetchNextArticlePage', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlePage, {
      articlePage: {
        page: 2,
        ids: [],
        entities: {},
        limit: 3,
        isLoading: false,
        hasMore: true,
      },
    });

    await thunk.callThunk();

    expect(thunk.dispatch).toHaveBeenCalledTimes(4);
    expect(fetchArticles).toHaveBeenCalledWith({ _page: 3 });
  });

  test('failure fetchNextArticlePage', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlePage, {
      articlePage: {
        page: 2,
        ids: [],
        entities: {},
        limit: 3,
        isLoading: false,
        hasMore: false,
      },
    });

    await thunk.callThunk();

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(fetchArticles).not.toHaveBeenCalledWith({ page: 3 });
  });

  test('failure fetchNextArticlePage during the Loading', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlePage, {
      articlePage: {
        page: 2,
        ids: [],
        entities: {},
        limit: 3,
        isLoading: true,
        hasMore: false,
      },
    });

    await thunk.callThunk();

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(fetchArticles).not.toHaveBeenCalledWith({ page: 3 });
  });
});
