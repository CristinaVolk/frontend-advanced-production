import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { ThemeEnum } from '@/app/providers/ThemeProvider';
import { AppLink, AppLinkTheme } from './AppLink';

export default {
  title: 'shared/AppLink',
  component: AppLink,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
	  to: '/',
  },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const PrimaryDarkMain = Template.bind({});
PrimaryDarkMain.args = {
  theme: AppLinkTheme.PRIMARY,
  children: 'Main',
};
PrimaryDarkMain.decorators = [ThemeDecorator(ThemeEnum.DARK)];

export const InvertedMain = Template.bind({});
InvertedMain.args = {
  theme: AppLinkTheme.INVERTED,
  children: 'Main',
};

export const PrimaryLightAbout = Template.bind({});
PrimaryLightAbout.args = {
  theme: AppLinkTheme.PRIMARY,
  children: 'About',
};

export const InvertedDarkAbout = Template.bind({});
InvertedDarkAbout.args = {
  theme: AppLinkTheme.INVERTED,
  children: 'About',
};
InvertedDarkAbout.decorators = [ThemeDecorator(ThemeEnum.DARK)];
