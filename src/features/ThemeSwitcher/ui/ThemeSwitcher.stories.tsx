import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { ThemeSwitcher } from './ThemeSwitcher';
import { ThemeEnum } from '@/shared/const/theme';

export default {
  title: 'widgets/ThemeSwitcher',
  component: ThemeSwitcher,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ThemeSwitcher>;

const Template: ComponentStory<typeof ThemeSwitcher> = (args) => <ThemeSwitcher {...args} />;

export const LightVersion = Template.bind({});
LightVersion.args = {};

export const DarkVersion = Template.bind({});
DarkVersion.args = {};
DarkVersion.decorators = [ThemeDecorator(ThemeEnum.DARK)];
