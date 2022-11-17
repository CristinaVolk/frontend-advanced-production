import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { ErrorCodes } from 'features/AuthByUsername/model/services/loginByUsername/loginByUsername';
import { ValidateProfileError } from 'features/EditableProfileCard/model/types/EditableProfile';
import { updateProfileData } from './updateProfileData';

const dataValue = {
  id: '1',
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
    const testAsyncThunk = new TestAsyncThunk(
      updateProfileData,
      {
        editableProfileCard: {
          formData: dataValue,
        },
      },
    );
    testAsyncThunk.api.put.mockReturnValue(Promise.resolve({ data: dataValue }));
    const result = await testAsyncThunk.callThunk();

    expect(testAsyncThunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(dataValue);
  });

  test('server data error', async () => {
    const testAsyncThunk = new TestAsyncThunk(
      updateProfileData,
      {
        editableProfileCard: {
          formData: dataValue,
        },
      },
    );
    testAsyncThunk.api.put.mockReturnValue(Promise.reject());
    const result = await testAsyncThunk.callThunk();

    expect(testAsyncThunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([ErrorCodes.SERVER_DOWN]);
  });

  test('validation data error', async () => {
    const testAsyncThunk = new TestAsyncThunk(
      updateProfileData,
      {
        editableProfileCard: {
          formData: { ...dataValue, age: 0 },
        },
      },
    );
    const result = await testAsyncThunk.callThunk();

    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([ValidateProfileError.INCORRECT_AGE]);
  });
});
