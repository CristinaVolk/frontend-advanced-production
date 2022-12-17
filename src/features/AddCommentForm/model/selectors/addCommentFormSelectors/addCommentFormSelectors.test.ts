import { StateSchema } from '@/app/providers/StoreProvider';
import { getAddCommentFormError, getAddCommentFormText } from './addCommentFormSelectors';

describe('getAddCommentFormText test', () => {
  const testValue = 'comment 1';

  test('with value', () => {
    const state:DeepPartial<StateSchema> = {
      addCommentForm: {
        text: 'comment 1',
      },
    };

    expect(getAddCommentFormText(state as StateSchema)).toBe(testValue);
  });

  test('with empty state passed', () => {
    const state:DeepPartial<StateSchema> = {};

    expect(getAddCommentFormText(state as StateSchema)).toBe('');
  });
});

describe('getArticleDetailsCommentsError test', () => {
  const testValue = 'error occurred';

  test('with value', () => {
    const state:DeepPartial<StateSchema> = {
      addCommentForm: {
        error: 'error occurred',
      },
    };

    expect(getAddCommentFormError(state as StateSchema)).toBe(testValue);
  });

  test('with empty state passed', () => {
    const state:DeepPartial<StateSchema> = {};

    expect(getAddCommentFormError(state as StateSchema)).toBe(undefined);
  });
});
