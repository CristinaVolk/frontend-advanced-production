import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { ErrorCodes } from 'shared/const/common';

export interface EditableProfile {
  id?: string;
  firstname?: string;
  surname?: string;
  age?: number;
  currency?: Currency | string;
  country?: Country | string;
  username?: string;
  avatar?: string;
}

export enum ValidateProfileError {
  INCORRECT_USER_DATA = 'INCORRECT_USER_DATA',
  INCORRECT_AGE = 'INCORRECT_AGE',
  INCORRECT_COUNTRY = 'INCORRECT_COUNTRY',
  NO_DATA = 'NO_DATA',
}

export interface EditableProfileCardSchema {
  formData?: EditableProfile;
  data?: EditableProfile;
  isLoading: boolean;
  error?: string;
  readonly: boolean;
  validateProfileErrors?: Array<ValidateProfileError | ErrorCodes>
}
