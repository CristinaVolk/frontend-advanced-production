import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import AboutPage from './AboutPage';
import { ThemeEnum } from '@/shared/const/theme';

export default {
  title: 'pages/AboutPage',
  component: AboutPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof AboutPage>;

const Template: ComponentStory<typeof AboutPage> = () => (
     <AboutPage />
);

export const LightAboutPage = Template.bind({});
LightAboutPage.args = {};

export const DarkAboutPage = Template.bind({});
DarkAboutPage.args = {};
DarkAboutPage.decorators = [ThemeDecorator(ThemeEnum.DARK)];
