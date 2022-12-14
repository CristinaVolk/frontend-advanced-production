import { ValidateProfileError } from '../../consts/consts';
import { EditableProfile } from '../../types/EditableProfile';

export const validateProfileFormData = (editableProfile?: EditableProfile) => {
  const errors: ValidateProfileError[] = [];

  if (!editableProfile) {
    return [ValidateProfileError.NO_DATA];
  }
  const {
    firstname, username, age, country,
  } = editableProfile;

  if (!firstname || !username) {
    errors.push(ValidateProfileError.INCORRECT_USER_DATA);
  }

  if (!age || age === 0) {
    errors.push(ValidateProfileError.INCORRECT_AGE);
  }

  if (!country) {
    errors.push(ValidateProfileError.INCORRECT_COUNTRY);
  }

  return errors;
};
