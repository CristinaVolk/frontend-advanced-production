import { getQueryParams } from './addQueryParams';

describe('getQueryParams test', () => {
    test('with single value in params', () => {
        expect(getQueryParams({ sort: '5' })).toBe('?sort=5');
    });

    test('with multiple params', () => {
        expect(getQueryParams({ sort: '5', limit: '10' })).toBe(
            '?sort=5&limit=10',
        );
    });
});
