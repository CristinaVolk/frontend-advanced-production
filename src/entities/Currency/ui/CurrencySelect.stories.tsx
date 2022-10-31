import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { ThemeEnum } from 'app/providers/ThemeProvider';
import { Currency } from 'entities/Currency';
import { CurrencySelect } from './CurrencySelect';

export default {
  title: 'entities/CurrencySelect',
  component: CurrencySelect,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    readonly: true,
    label: Currency.GBP,
    value: Currency.GBP,
    options: [
      { value: Currency.RUB, content: Currency.RUB },
      { value: Currency.EUR, content: Currency.EUR },
      { value: Currency.USD, content: Currency.USD },
    ],
  },
} as ComponentMeta<typeof CurrencySelect>;

const Template: ComponentStory<typeof CurrencySelect> = (args) => <CurrencySelect {...args} />;

export const LightCurrencySelect = Template.bind({});
LightCurrencySelect.args = {};

export const DarkCurrencySelect = Template.bind({});
DarkCurrencySelect.args = {};
DarkCurrencySelect.decorators = [ThemeDecorator(ThemeEnum.DARK)];
