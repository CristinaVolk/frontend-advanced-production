import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { ErrorCodes } from '@/shared/const/common';
import { ValidateProfileError } from '../consts/consts';

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

export interface EditableProfileCardSchema {
  formData?: EditableProfile;
  data?: EditableProfile;
  isLoading: boolean;
  error?: string;
  readonly: boolean;
  validateProfileErrors?: Array<ValidateProfileError | ErrorCodes>
}
