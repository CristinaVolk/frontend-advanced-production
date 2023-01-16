import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Flex } from './Flex';

export default {
    title: 'shared/Flex',
    component: Flex,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args} />;

export const Row = Template.bind({});
Row.args = {
    gap: '4',
    children: (
        <>
            <div>one</div>
            <div>two</div>
            <div>three</div>
            <div>four</div>
            <div>end</div>
        </>
    ),
};

export const Column = Template.bind({});
Column.args = {
    direction: 'column',
    children: (
        <>
            <div>one</div>
            <div>two</div>
            <div>three</div>
            <div>four</div>
            <div>end</div>
        </>
    ),
};
