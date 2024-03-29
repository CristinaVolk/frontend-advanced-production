import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ViewSelectorContainer } from './ViewSelectorContainer';

export default {
    title: '/ViewSelectorContainer',
    component: ViewSelectorContainer,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ViewSelectorContainer>;

const Template: ComponentStory<typeof ViewSelectorContainer> = (args) => (
    <ViewSelectorContainer {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
