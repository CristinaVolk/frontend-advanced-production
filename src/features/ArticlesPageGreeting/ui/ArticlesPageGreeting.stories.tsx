import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ArticlesPageGreeting } from './ArticlesPageGreeting';

export default {
    title: '/ArticlesPageGreeting',
    component: ArticlesPageGreeting,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticlesPageGreeting>;

const Template: ComponentStory<typeof ArticlesPageGreeting> = () => (
    <ArticlesPageGreeting />
);

export const Normal = Template.bind({});
Normal.args = {};
