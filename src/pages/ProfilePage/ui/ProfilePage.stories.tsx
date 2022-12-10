import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { ThemeEnum } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator';
import ProfilePage from './ProfilePage';

export default {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = () => (
     <ProfilePage />
);

export const LightProfilePage = Template.bind({});
LightProfilePage.args = {};
LightProfilePage.decorators = [ThemeDecorator(ThemeEnum.LIGHT), StoreDecorator({})];

export const DarkProfilePage = Template.bind({});
DarkProfilePage.args = {};
DarkProfilePage.decorators = [ThemeDecorator(ThemeEnum.DARK), StoreDecorator({})];
