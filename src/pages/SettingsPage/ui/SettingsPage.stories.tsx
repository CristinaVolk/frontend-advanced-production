import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import SettingsPage from './SettingsPage';

export default {
    title: '/SettingsPage',
    component: SettingsPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof SettingsPage>;

const Template: ComponentStory<typeof SettingsPage> = () => <SettingsPage />;

export const Normal = Template.bind({});
Normal.args = {};
