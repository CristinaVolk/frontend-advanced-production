import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';

export interface Profile {
  firstname?: string;
  surname?: string;
  age?: number;
  currency?: Currency | string;
  country?: Country | string;
  username?: string;
  avatar?: string;
}

export interface EditableProfileCardSchema {
  formData?: Profile;
  data?: Profile;
  isLoading: boolean;
  error?: string;
  readonly: boolean;
}
