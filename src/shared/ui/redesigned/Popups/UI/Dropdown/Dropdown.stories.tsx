import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Button } from '../../../Button/Button';
import { AppLink } from '../../../AppLink/AppLink';
import { Text } from '../../../Text/Text';

import { Dropdown } from './Dropdown';

const CSSStyles: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
};

export default {
    title: 'shared/Popups/Dropdown',
    component: Dropdown,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        (Story) => (
            <div style={CSSStyles}>
                <Story />
            </div>
        ),
    ],
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => (
    <Dropdown {...args} />
);

export const Clear = Template.bind({});
Clear.args = {
    trigger: <Button variant="clear">Open!</Button>,
    items: [
        {
            id: '1',
            content: 'first',
        },
        {
            id: '2',
            content: 'second',
        },
        {
            id: '3',
            content: 'third',
        },
    ],
};

export const BottomLeft = Template.bind({});
BottomLeft.args = {
    trigger: <Button variant="outline">Open!</Button>,
    direction: 'bottomLeft',
    items: [
        {
            id: '4',
            content: <Text variant="primary" text="Primary" />,
            disabled: false,
        },
        {
            id: '5',
            content: <Text variant="error" text="Error" />,
            disabled: true,
        },
        {
            id: '6',
            content: <Text variant="accent" text="Accent" />,
            disabled: false,
        },
    ],
};

export const TopLeft = Template.bind({});
TopLeft.args = {
    trigger: <Button variant="clear">Open!</Button>,
    direction: 'topLeft',
    items: [
        {
            id: '7',
            content: <Button variant="clear">Alert</Button>,
            disabled: false,
            onClick: () => {
                alert('Click!');
            },
        },
        {
            id: '8 ',
            content: <Button variant="outline">Disabled</Button>,
            disabled: true,
        },
        {
            id: '9 ',
            content: <Button variant="outline">Alert</Button>,
            disabled: false,
        },
    ],
};

export const Bottom = Template.bind({});
Bottom.args = {
    trigger: <Button variant="outline">Open!</Button>,
    direction: 'bottom',
    items: [
        {
            id: '10',
            content: <AppLink to="/about">I am a link</AppLink>,
            disabled: false,
            href: '/about',
        },
        { id: '11', content: 'Adjfhgnm,', disabled: false },
        { id: '12', content: 'Adjfhgnm,', disabled: false },
    ],
};
