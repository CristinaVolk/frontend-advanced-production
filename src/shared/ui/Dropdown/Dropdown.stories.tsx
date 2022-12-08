import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Button, ButtonTheme } from '../Button/Button';
import { AppLink } from '../AppLink/AppLink';
import { Text, TextTheme } from '../Text/Text';

import { Dropdown } from './Dropdown';

const CSSStyles: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
};

export default {
  title: 'shared/Dropdown',
  component: Dropdown,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [
    (Story) => (
         <div
            style={CSSStyles}
         >
              <Story />
         </div>
    ),
  ],
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  trigger: <Button theme={ButtonTheme.CREATIVE}>Open!</Button>,
  items: [
    {
      content: 'first',
    },
    {
      content: 'second',
    },
    {
      content: 'third',
    },
  ],
};

export const BottomLeft = Template.bind({});
BottomLeft.args = {
  trigger: <Button theme={ButtonTheme.CREATIVE}>Open!</Button>,
  direction: 'bottomLeft',
  items: [
    { content: <Text theme={TextTheme.PRIMARY} text="Primary" />, disabled: false },
    { content: <Text theme={TextTheme.ERROR} text="Error" />, disabled: true },
    { content: <Text theme={TextTheme.INVERTED} text="Inverted" />, disabled: false },
  ],
};

export const TopLeft = Template.bind({});
TopLeft.args = {
  trigger: <Button theme={ButtonTheme.CREATIVE}>Open!</Button>,
  direction: 'topLeft',
  items: [
    { content: <Button theme={ButtonTheme.CLEAR}>Alert</Button>, disabled: false, onClick: () => { alert('Click!'); } },
    { content: <Button theme={ButtonTheme.BACKGROUND}>Disabled</Button>, disabled: true },
    { content: <Button theme={ButtonTheme.INVERTED_BACKGROUND}>Alert</Button>, disabled: false },
  ],
};

export const Bottom = Template.bind({});
Bottom.args = {
  trigger: <Button theme={ButtonTheme.CREATIVE}>Open!</Button>,
  direction: 'bottom',
  items: [
    { content: <AppLink to="/about">I am a link</AppLink>, disabled: false, href: '/about' },
    { content: 'Adjfhgnm,', disabled: false },
    { content: 'Adjfhgnm,', disabled: false },
  ],
};
