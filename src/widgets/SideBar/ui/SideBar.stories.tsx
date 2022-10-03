import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { SideBar } from 'widgets/SideBar';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { ThemeEnum } from 'app/providers/ThemeProvider';

export default {
  title: 'widgets/SideBar',
  component: SideBar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof SideBar>;

const Template: ComponentStory<typeof SideBar> = (args) => <SideBar {...args} />;

export const LightBar = Template.bind({});
LightBar.args = {

};
LightBar.decorators = [ThemeDecorator(ThemeEnum.LIGHT)];

export const Dark = Template.bind({});
Dark.args = {
  children: 'Main',
};
Dark.decorators = [ThemeDecorator(ThemeEnum.DARK)];
