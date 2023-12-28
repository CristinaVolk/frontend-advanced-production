import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { ArticleType } from '@/entities/Article';
import { fetchNextArticlePage } from './fetchNextArticlePage';
import { fetchArticles } from '../fetchArticles/fetchArticles';
import { ArticleSortField } from '@/shared/const/article';

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
                order: 'asc',
                sort: ArticleSortField.CREATED,
                search: '',
                type: ArticleType.ALL,
                _inited: false,
            },
        });

        await thunk.callThunk();

        expect(thunk.dispatch).toHaveBeenCalledTimes(4);
        expect(fetchArticles).toHaveBeenCalledWith({ replace: true });
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
                order: 'asc',
                sort: ArticleSortField.CREATED,
                search: '',
                type: ArticleType.ALL,
                _inited: false,
            },
        });

        await thunk.callThunk();

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(fetchArticles).not.toHaveBeenCalled();
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
                order: 'asc',
                sort: ArticleSortField.CREATED,
                search: '',
                type: ArticleType.ALL,
                _inited: false,
            },
        });

        await thunk.callThunk();

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(fetchArticles).not.toHaveBeenCalled();
    });
});
