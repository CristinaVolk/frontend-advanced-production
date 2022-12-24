import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { Input } from './Input';
import { ThemeEnum } from '@/shared/const/theme';

export default {
  title: 'shared/Input',
  component: Input,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    placeholder: 'Enter Username',
    value: 'Volk',
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const LightInput = Template.bind({});
LightInput.args = {
};

export const DarkInput = Template.bind({});
DarkInput.args = {
  className: 'dark',
};
DarkInput.decorators = [ThemeDecorator(ThemeEnum.DARK)];
