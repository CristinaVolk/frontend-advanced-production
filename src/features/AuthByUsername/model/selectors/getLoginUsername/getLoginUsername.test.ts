import { StateSchema } from '@/app/providers/StoreProvider';
import { getLoginUsername } from './getLoginUsername';

describe('getLoginUsername.test', () => {
  test('with value', () => {
    const state:DeepPartial<StateSchema> = {
      loginForm: {
        username: 'admin',
      },
    };

    expect(getLoginUsername(state as StateSchema)).toEqual('admin');
  });

  test('with empty state passed', () => {
    const state:DeepPartial<StateSchema> = {};

    expect(getLoginUsername(state as StateSchema)).toEqual('');
  });
});
