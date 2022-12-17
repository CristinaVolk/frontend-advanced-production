import { StateSchema } from '@/app/providers/StoreProvider';
import { getProfileFormData } from './getProfileFormData';

describe('getProfileFormData.test', () => {
  const data = {
    firstname: 'Cris',
    surname: 'Volk',
    age: 22,
    currency: 'EUR',
    country: 'Scotland',
    username: 'admin@admin.com',
    avatar: 'https://pbs.twimg.com/profile_images/540611068721364992/J4ityfdN_400x400.jpeg',
  };

  test('with value', () => {
    const state:DeepPartial<StateSchema> = {
      editableProfileCard: {
        formData: data,
      },
    };

    expect(getProfileFormData(state as StateSchema)).toEqual(data);
  });

  test('with empty state passed', () => {
    const state:DeepPartial<StateSchema> = {};

    expect(getProfileFormData(state as StateSchema)).toBeUndefined();
  });
});
