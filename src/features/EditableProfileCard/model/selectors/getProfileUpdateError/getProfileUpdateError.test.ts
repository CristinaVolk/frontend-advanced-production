import { StateSchema } from '@/app/providers/StoreProvider';
import { ValidateProfileError } from '../../consts/consts';
import { getProfileUpdateError } from './getProfileUpdateError';

describe('getProfileUpdateError.test', () => {
  const testValue = ValidateProfileError.NO_DATA;

  test('with value', () => {
    const state:DeepPartial<StateSchema> = {
      editableProfileCard: {
        error: ValidateProfileError.NO_DATA,
      },
    };

    expect(getProfileUpdateError(state as StateSchema)).toEqual(testValue);
  });

  test('with empty state passed', () => {
    const state:DeepPartial<StateSchema> = {};

    expect(getProfileUpdateError(state as StateSchema)).toBe('');
  });
});
