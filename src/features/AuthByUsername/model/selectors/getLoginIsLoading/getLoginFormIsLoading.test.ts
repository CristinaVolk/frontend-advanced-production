import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginFormIsLoading } from './getLoginFormIsLoading';

describe('getLoginError.test', () => {
  test('with false', () => {
    const state:DeepPartial<StateSchema> = {
      loginForm: {
        isLoading: false,
      },
    };

    expect(getLoginFormIsLoading(state as StateSchema)).toEqual(false);
  });

  test('with true', () => {
    const state:DeepPartial<StateSchema> = {
      loginForm: {
        isLoading: true,
      },
    };

    expect(getLoginFormIsLoading(state as StateSchema)).toEqual(true);
  });

  test('with empty state', () => {
    const state:DeepPartial<StateSchema> = {};

    expect(getLoginFormIsLoading(state as StateSchema)).toEqual(false);
  });
});
