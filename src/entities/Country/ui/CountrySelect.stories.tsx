import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';

import { Country } from '../../../shared/const/Country';
import { CountrySelect } from './CountrySelect';
import { ThemeEnum } from '@/shared/const/theme';

export default {
  title: 'entities/CountrySelect',
  component: CountrySelect,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    readonly: true,
    label: Country.IRELAND,
    value: Country.IRELAND,
    options: [
      { value: Country.SCOTLAND, content: Country.SCOTLAND },
      { value: Country.GB, content: Country.GB },
      { value: Country.USA, content: Country.USA },
      { value: Country.IRELAND, content: Country.IRELAND },
    ],
  },
} as ComponentMeta<typeof CountrySelect>;

const Template: ComponentStory<typeof CountrySelect> = (args) => <CountrySelect {...args} />;

export const LightCountrySelect = Template.bind({});
LightCountrySelect.args = {};

export const DarkCountrySelect = Template.bind({});
DarkCountrySelect.args = {};
DarkCountrySelect.decorators = [ThemeDecorator(ThemeEnum.DARK)];
