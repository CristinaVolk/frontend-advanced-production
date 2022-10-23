import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginError } from './getLoginError';

describe('getLoginError.test', () => {
  test('with error', () => {
    const state:DeepPartial<StateSchema> = {
      loginForm: {
        error: 'error',
      },
    };

    expect(getLoginError(state as StateSchema)).toEqual('error');
  });

  test('with empty state passed', () => {
    const state:DeepPartial<StateSchema> = {};

    expect(getLoginError(state as StateSchema)).toEqual('');
  });
});
