import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Select } from './Select';

export default {
  title: 'shared/Select',
  component: Select,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const LightSelectCountry = Template.bind({});
LightSelectCountry.args = {
  value: 'Choose your lifespan',
  options: [
    { value: 'Iceland', content: 'Iceland' },
    { value: 'Ireland', content: 'Ireland' },
    { value: 'Scotland', content: 'Iceland' },
  ],
};
