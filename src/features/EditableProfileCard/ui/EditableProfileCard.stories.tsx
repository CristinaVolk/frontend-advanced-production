import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { ThemeEnum } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator';
import { ErrorCodes } from 'features/AuthByUsername/model/services/loginByUsername/loginByUsername';
import { EditableProfileCard } from './EditableProfileCard';

export default {
  title: 'features/EditableProfileCard',
  component: EditableProfileCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof EditableProfileCard>;

const Template: ComponentStory<typeof EditableProfileCard> = (args) => (
     <EditableProfileCard {...args} />
);

export const LightEditableProfileCard = Template.bind({});
LightEditableProfileCard.decorators = [ThemeDecorator(ThemeEnum.LIGHT), StoreDecorator({
  editableProfileCard: {
    isLoading: false,
    data: {
      firstname: 'Cris',
      surname: 'Volk',
      age: 22,
      currency: 'EUR',
      country: 'Scotland',
      username: 'admin@admin.com',
      avatar: 'https://pbs.twimg.com/profile_images/540611068721364992/J4ityfdN_400x400.jpeg',
    },
    formData: {
      firstname: 'Cris',
      surname: 'Volk',
      age: 22,
      currency: 'EUR',
      country: 'Scotland',
      username: 'admin@admin.com',
      avatar: 'https://pbs.twimg.com/profile_images/540611068721364992/J4ityfdN_400x400.jpeg',
    },
  },
})];

export const DarkEditableProfileCardWithError = Template.bind({});
DarkEditableProfileCardWithError.decorators = [ThemeDecorator(ThemeEnum.DARK), StoreDecorator({
  editableProfileCard: {
    isLoading: false,
    error: ErrorCodes.INCORRECT_CREDENTIALS,
    data: undefined,
    formData: undefined,
  },
})];
