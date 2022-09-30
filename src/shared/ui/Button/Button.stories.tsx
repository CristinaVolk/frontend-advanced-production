import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { ThemeEnum } from 'app/providers/ThemeProvider';
import { Button, ThemeButton } from './Button';

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Text',
};

export const ClearDark = Template.bind({});
ClearDark.args = {
  children: 'Text',
  theme: ThemeButton.CLEAR,
};
ClearDark.decorators = [ThemeDecorator(ThemeEnum.DARK)];

export const RoundedDark = Template.bind({});
RoundedDark.args = {
  children: 'Rounded',
  theme: ThemeButton.ROUNDED,
};
RoundedDark.decorators = [ThemeDecorator(ThemeEnum.DARK)];

export const CreativeDark = Template.bind({});
CreativeDark.args = {
  children: 'Creative',
  theme: ThemeButton.CREATIVE,
};
CreativeDark.decorators = [ThemeDecorator(ThemeEnum.DARK)];

export const CreativeLight = Template.bind({});
CreativeLight.args = {
  children: 'Creative',
  theme: ThemeButton.CREATIVE,
};
