import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { ThemeEnum } from 'app/providers/ThemeProvider';
import { NotFoundPage } from './NotFoundPage';

export default {
  title: 'pages/NotFoundPage',
  component: NotFoundPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof NotFoundPage>;

const Template: ComponentStory<typeof NotFoundPage> = (args) => <NotFoundPage {...args} />;

export const LightNotFound = Template.bind({});
LightNotFound.args = {

};
LightNotFound.decorators = [ThemeDecorator(ThemeEnum.LIGHT)];

export const DarkNotFound = Template.bind({});
DarkNotFound.args = {

};
DarkNotFound.decorators = [ThemeDecorator(ThemeEnum.DARK)];
