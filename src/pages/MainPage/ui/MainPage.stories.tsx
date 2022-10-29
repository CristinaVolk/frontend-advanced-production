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

const Template: ComponentStory<typeof MainPage> = () => (
     <MainPage />
);

export const MainLight = Template.bind({});
MainLight.args = {};

export const MainDark = Template.bind({});
MainDark.args = {};
MainDark.decorators = [ThemeDecorator(ThemeEnum.DARK)];
