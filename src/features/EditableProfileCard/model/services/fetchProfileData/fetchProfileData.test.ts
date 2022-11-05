import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { fetchProfileData } from './fetchProfileData';

const dataValue = {
  firstname: 'Cris',
  surname: 'Volk',
  age: 22,
  currency: 'EUR',
  country: 'Scotland',
  username: 'admin@admin.com',
  avatar: 'https://pbs.twimg.com/profile_images/540611068721364992/J4ityfdN_400x400.jpeg',
};

describe('fetchProfileData.test', () => {
  test('success data', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ data: dataValue }));
    const result = await thunk.callThunk();

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(dataValue);
  });

  test('Profile data fetching failed', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.reject());
    const result = await thunk.callThunk();

    expect(result.meta.requestStatus).toBe('rejected');
  });
});
