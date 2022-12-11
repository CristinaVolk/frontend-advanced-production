import { screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import userEvent from '@testing-library/user-event';
import { $api } from 'shared/api/api';
import { EditableProfile } from '../../model/types/EditableProfile';
import {
  editableProfileCardReducer,
} from '../../model/slices/editableProfileCardSlice/editableProfileCardSlice';
import { EditableProfileCard } from './EditableProfileCard';

const profile: EditableProfile = {
  id: '1',
  firstname: 'Crisss',
  surname: 'Volk',
  age: 23,
  currency: Currency.GBP,
  country: Country.IRELAND,
  username: 'admin@admin.com',
  avatar: 'https://pbs.twimg.com/profile_images/540611068721364992/J4ityfdN_400x400.jpeg',
};

describe('EditableProfileCard test', () => {
  const options = {
    initialState: {
      editableProfileCard: {
        data: profile,
        formData: profile,
        readonly: true,
      },
      user: {
        authData: {
          id: '1',
          username: 'admin@admin.com',
        },
      },
    },
    asyncReducers: {
      editableProfileCard: editableProfileCardReducer,
    },
  };

  test('the editing mode can be enabled', async () => {
    componentRender(<EditableProfileCard id="1" />, options);
    // screen.debug();
    await userEvent.click(screen.getByTestId('EditableProfileCard.EditButton'));
    expect(screen.getByTestId('EditableProfileCard.CancelButton')).toBeInTheDocument();
  });

  test('the fields should be cleared', async () => {
    componentRender(<EditableProfileCard id="1" />, options);
    // screen.debug();
    await userEvent.click(screen.getByTestId('EditableProfileCard.EditButton'));

    await userEvent.clear(screen.getByTestId('ProfileCard.Firstname'));
    await userEvent.clear(screen.getByTestId('ProfileCard.Username'));

    await userEvent.type(screen.getByTestId('ProfileCard.Firstname'), 'Ha');
    await userEvent.type(screen.getByTestId('ProfileCard.Username'), 'Hong');

    await userEvent.click(screen.getByTestId('EditableProfileCard.CancelButton'));

    expect(screen.getByTestId('ProfileCard.Firstname')).toHaveValue('Crisss');
    expect(screen.getByTestId('ProfileCard.Username')).toHaveValue('admin@admin.com');
  });

  test('the error case', async () => {
    componentRender(<EditableProfileCard id="1" />, options);
    // screen.debug();
    await userEvent.click(screen.getByTestId('EditableProfileCard.EditButton'));

    await userEvent.clear(screen.getByTestId('ProfileCard.Firstname'));

    await userEvent.click(screen.getByTestId('EditableProfileCard.SaveButton'));

    expect(screen.getByTestId('EditableProfileCard.ErrorParagraph')).toBeInTheDocument();
  });

  test('the form is valid to be sent to the server', async () => {
    componentRender(<EditableProfileCard id="1" />, options);
    const mockPutRequest = jest.spyOn($api, 'put');
    // screen.debug();
    await userEvent.click(screen.getByTestId('EditableProfileCard.EditButton'));

    await userEvent.type(screen.getByTestId('ProfileCard.Firstname'), 'Hong Ha');

    await userEvent.click(screen.getByTestId('EditableProfileCard.SaveButton'));

    expect(mockPutRequest).toHaveBeenCalled();
  });
});
