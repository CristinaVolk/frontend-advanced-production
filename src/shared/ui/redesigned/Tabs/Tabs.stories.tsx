import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Tabs } from './Tabs';

export default {
    title: 'shared/Tabs',
    component: Tabs,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    value: 'tab1',
    tabs: [
        {
            value: 'tab1',
            content: 'tab 1',
        },
        {
            value: 'tab1',
            content: 'tab 1',
        },
    ],
};
