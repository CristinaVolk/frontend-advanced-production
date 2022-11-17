import { StateSchema } from 'app/providers/StoreProvider';
import { getArticleDetailsCommentsError, getArticleDetailsCommentsIsLoading } from './comments';

describe('getArticleDetailsCommentsIsLoading test', () => {
  test('with value', () => {
    const state:DeepPartial<StateSchema> = {
      articleDetailsComments: {
        isLoading: true,
      },
    };

    expect(getArticleDetailsCommentsIsLoading(state as StateSchema)).toBeTruthy();
  });

  test('with empty state passed', () => {
    const state:DeepPartial<StateSchema> = {};

    expect(getArticleDetailsCommentsIsLoading(state as StateSchema)).toBeFalsy();
  });
});

describe('getArticleDetailsCommentsError test', () => {
  const testValue = 'error occurred';

  test('with value', () => {
    const state:DeepPartial<StateSchema> = {
      articleDetailsComments: {
        error: 'error occurred',
      },
    };

    expect(getArticleDetailsCommentsError(state as StateSchema)).toBe(testValue);
  });

  test('with empty state passed', () => {
    const state:DeepPartial<StateSchema> = {};

    expect(getArticleDetailsCommentsError(state as StateSchema)).toBeUndefined();
  });
});
