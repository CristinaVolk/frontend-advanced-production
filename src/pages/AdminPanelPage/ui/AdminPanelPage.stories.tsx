import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { ThemeEnum } from 'app/providers/ThemeProvider';
import AdminPanelPage from './AdminPanelPage';

export default {
  title: 'pages/AdminPanelPage',
  component: AdminPanelPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof AdminPanelPage>;

const Template: ComponentStory<typeof AdminPanelPage> = () => (
     <AdminPanelPage />
);

export const LightAdminPanelPage = Template.bind({});
LightAdminPanelPage.args = {};

export const DarkAdminPanelPage = Template.bind({});
DarkAdminPanelPage.args = {};
DarkAdminPanelPage.decorators = [ThemeDecorator(ThemeEnum.DARK)];
