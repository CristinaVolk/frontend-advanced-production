import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { Button, ButtonSize, ButtonTheme } from './Button';
import { ThemeEnum } from '@/shared/const/theme';

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
  theme: ButtonTheme.CLEAR,
};
ClearDark.decorators = [ThemeDecorator(ThemeEnum.DARK)];

export const Background = Template.bind({});
Background.args = {
  children: 'Click',
  theme: ButtonTheme.BACKGROUND,
};

export const BackgroundInverted = Template.bind({});
Background.args = {
  children: 'Click',
  theme: ButtonTheme.INVERTED_BACKGROUND,
};

export const Neat = Template.bind({});
Neat.args = {
  children: 'Neat',
  theme: ButtonTheme.NEAT,
};

export const Square = Template.bind({});
Background.args = {
  children: '>',
  theme: ButtonTheme.BACKGROUND,
  square: true,
};

export const SizeMedium = Template.bind({});
SizeMedium.args = {
  children: '>',
  theme: ButtonTheme.BACKGROUND,
  square: true,
  size: ButtonSize.M,
};

export const SizeLarge = Template.bind({});
SizeLarge.args = {
  children: '>',
  theme: ButtonTheme.BACKGROUND,
  square: true,
  size: ButtonSize.L,
};

export const SizeExtraLarge = Template.bind({});
SizeExtraLarge.args = {
  children: '>',
  theme: ButtonTheme.BACKGROUND,
  square: true,
  size: ButtonSize.XL,
};

export const SizeXLDisabled = Template.bind({});
SizeXLDisabled.args = {
  children: 'Login',
  theme: ButtonTheme.CLEAR,
  size: ButtonSize.XL,
  disabled: true,
};
