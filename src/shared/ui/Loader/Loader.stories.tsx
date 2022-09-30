import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { ThemeEnum } from 'app/providers/ThemeProvider';
import { Loader } from './Loader';

export default {
  title: 'shared/Loader',
  component: Loader,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
	  className: 'lds-grid',
  },
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

export const LightVersion = Template.bind({});
LightVersion.args = {

};

export const DarkVersion = Template.bind({});
DarkVersion.args = {

};
DarkVersion.decorators = [ThemeDecorator(ThemeEnum.DARK)];
