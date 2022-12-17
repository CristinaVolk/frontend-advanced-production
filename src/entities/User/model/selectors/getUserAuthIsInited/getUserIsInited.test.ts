import { StateSchema } from '@/app/providers/StoreProvider';
import { getUserIsInited } from './getUserIsInited';

describe('getUserIsInited.test', () => {
  const testUser = {
    id: '1',
    username: 'admin',
  };

  test('with value', () => {
    const state:DeepPartial<StateSchema> = {
      user: {
        authData: testUser,
        _inited: true,

      },
    };

    expect(getUserIsInited(state as StateSchema)).toBeTruthy();
  });

  test('not inited', () => {
    const state:DeepPartial<StateSchema> = {
      user: {
        authData: testUser,
        _inited: false,
      },
    };

    expect(getUserIsInited(state as StateSchema)).toBeFalsy();
  });

  test('with empty state passed', () => {
    const state:DeepPartial<StateSchema> = {
      user: {},
    };

    expect(getUserIsInited(state as StateSchema)).toBeFalsy();
  });
});
