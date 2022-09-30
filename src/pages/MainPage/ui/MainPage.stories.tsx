import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { ThemeEnum } from 'app/providers/ThemeProvider';
import MainPage from './MainPage';

export default {
  title: 'pages/MainPage',
  component: MainPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof MainPage>;

const Template: ComponentStory<typeof MainPage> = (args) => (
     <MainPage {...(args as typeof MainPage)} />
);

export const LightAboutPage = Template.bind({});
LightAboutPage.args = {};

export const DarkAboutPage = Template.bind({});
DarkAboutPage.args = {};
DarkAboutPage.decorators = [ThemeDecorator(ThemeEnum.DARK)];
