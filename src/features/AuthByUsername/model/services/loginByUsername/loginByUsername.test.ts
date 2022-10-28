import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { userActions } from 'entities/User/model/slices/userSlice';
import { loginByUsername } from './loginByUsername';

describe('loginByUsername.test', () => {
  // let dispatch : Dispatch;
  // let getState: () => StateSchema;
  //
  // beforeEach(() => {
  //   dispatch = jest.fn();
  //   getState = jest.fn();
  // });

  // test('success login', async () => {
  //   const userValue = { username: 'admin', id: '1' };
  //   mockedAxios.post.mockReturnValue(Promise.resolve({
  //     data: userValue,
  //   }));
  //
  //   const action = loginByUsername({ username: 'admin', password: '123' });
  //   const result = await action(dispatch, getState, undefined);
  //
  //   expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
  //   expect(dispatch).toHaveBeenCalledTimes(3);
  //   expect(mockedAxios.post).toHaveBeenCalled();
  //   expect(result.meta.requestStatus).toBe('fulfilled');
  //   expect(result.payload).toEqual(userValue);
  // });
  //
  // test('login failed', async () => {
  //   mockedAxios.post.mockReturnValue(Promise.resolve({
  //     status: 403,
  //   }));
  //
  //   const action = loginByUsername({ username: 'admin', password: '123' });
  //   const result = await action(dispatch, getState, undefined);
  //   console.log(result);
  //
  //   expect(mockedAxios.post).toHaveBeenCalled();
  //   expect(dispatch).toHaveBeenCalledTimes(2);
  //   expect(result.meta.requestStatus).toBe('rejected');
  //   expect(result.payload).toBe('INCORRECT_CREDENTIALS');
  // });

  test('success login', async () => {
    const userValue = { username: 'admin', id: '1' };

    const thunk = new TestAsyncThunk(loginByUsername);
    thunk.api.post.mockReturnValue(Promise.resolve({ data: userValue }));
    const result = await thunk.callThunk({ username: 'admin', password: '123' });

    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
    expect(thunk.dispatch).toHaveBeenCalledTimes(3);
    expect(thunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(userValue);
  });

  test('login failed', async () => {
    const testAsyncThunk = new TestAsyncThunk(loginByUsername);
    testAsyncThunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));

    const result = await testAsyncThunk.callThunk({ username: 'admin', password: '123' });
    expect(testAsyncThunk.dispatch).toHaveBeenCalledTimes(2);
    expect(testAsyncThunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe('INCORRECT_CREDENTIALS');
  });
});
