import { USER_LOCAL_STORAGE_KEY } from '@/shared/const/localStorage';
import { userActions, userReducer } from './userSlice';
import { UserSchema } from '../types/UserSchema';

describe('userSlice.test', () => {
  const testUserData = {
    id: '1',
    username: 'admin',
  };

  test('setAuthData action', () => {
    localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(testUserData));

    const state: DeepPartial<UserSchema> = {
      authData: undefined,
      _inited: false,
    };

    expect(userReducer(
      state as UserSchema,
      userActions.setAuthData(testUserData),
    )).toEqual({
      authData: testUserData,
      _inited: false,
    });
  });

  test('should init user data', () => {
    const state: DeepPartial<UserSchema> = {
      authData: testUserData,
      _inited: true,
    };

    expect(userReducer(
      state as UserSchema,
      userActions.initAuthData(),
    )).toEqual({ authData: testUserData, _inited: true });
  });

  test('should init user data with user undefined', () => {
    localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify({}));

    const state: DeepPartial<UserSchema> = {
      authData: undefined,
      _inited: false,
    };

    expect(userReducer(
      state as UserSchema,
      userActions.initAuthData(),
    )).toEqual({ authData: {}, _inited: true });
  });

  test('logout action', () => {
    const state: DeepPartial<UserSchema> = {
      authData: testUserData,
      _inited: true,
    };

    expect(userReducer(
      state as UserSchema,
      userActions.logout(),
    )).toEqual({ authData: undefined, _inited: true });
  });
});
