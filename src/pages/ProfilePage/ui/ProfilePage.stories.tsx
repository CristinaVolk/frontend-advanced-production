import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import withMock from 'storybook-addon-mock';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { ThemeEnum } from '@/app/providers/ThemeProvider';
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator';
import ProfilePage from './ProfilePage';

export default {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [withMock],
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = () => (
     <ProfilePage />
);

const profile = {
  id: '3',
  firstname: 'Orca',
  surname: 'Orca Orca',
  age: 22,
  currency: 'RUB',
  country: 'Belarus',
  username: 'volk@com',
  password: '314',
  roles: [
    'MANAGER',
  ],
  avatar: 'https://images.immediate.co.uk/production/volatile/sites/23/2016/05/GettyImages-912769276-c96f25b.jpg?quality=90&resize=980,654',
};

export const LightProfilePage = Template.bind({});
LightProfilePage.args = {};
LightProfilePage.decorators = [ThemeDecorator(ThemeEnum.LIGHT), StoreDecorator({
  editableProfileCard: {
    formData: {
      id: '1',
      firstname: 'Crisss',
      surname: 'Volk',
      age: 23,
      currency: 'EUR',
      country: 'Scotland',
      username: 'admin@admin.com',
      avatar: 'https://pbs.twimg.com/profile_images/540611068721364992/J4ityfdN_400x400.jpeg',
    },
  },
})];

export const DarkProfilePage = Template.bind({});
DarkProfilePage.args = {};
DarkProfilePage.decorators = [ThemeDecorator(ThemeEnum.DARK)];

DarkProfilePage.parameters = {
  mockData: [{
    url: `${__API__}/profile/3`,
    method: 'GET',
    status: 200,
    response: profile,
  }],
};
