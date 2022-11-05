import { StateSchema } from 'app/providers/StoreProvider';
import { ValidateProfileError } from '../../types/EditableProfile';
import { getProfileValidateErrors } from './getProfileValidateErrors';

describe('getProfileValidateErrors.test', () => {
  const testValue = [
    ValidateProfileError.INCORRECT_COUNTRY,
    ValidateProfileError.INCORRECT_AGE,
  ];

  test('with value', () => {
    const state:DeepPartial<StateSchema> = {
      editableProfileCard: {
        validateProfileErrors: testValue,
      },
    };

    expect(getProfileValidateErrors(state as StateSchema)).toEqual(testValue);
  });

  test('with empty state passed', () => {
    const state:DeepPartial<StateSchema> = {};

    expect(getProfileValidateErrors(state as StateSchema)).toBeUndefined();
  });
});
