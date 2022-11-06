import { StateSchema } from 'app/providers/StoreProvider';
import { getUserAuthData } from './getUserAuthData';

describe('getUserAuthData.test', () => {
  const testValue = {
    id: '1',
    username: 'admin',
  };

  test('with value', () => {
    const state:DeepPartial<StateSchema> = {
      user: {
        authData: {
          id: '1',
          username: 'admin',
        },
        _inited: true,
      },
    };

    expect(getUserAuthData(state as StateSchema)).toEqual(testValue);
  });

  test('with empty state passed', () => {
    const state:DeepPartial<StateSchema> = {
      user: {
        authData: {},
      },
    };

    expect(getUserAuthData(state as StateSchema)).toEqual({});
  });
});
