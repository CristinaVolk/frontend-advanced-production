import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ListBox } from './ListBox';

export default {
  title: 'shared/Popups/ListBox',
  component: ListBox,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [
    (Story) => <div style={{ padding: 150 }}><Story /></div>,
  ],
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />;

export const TopRight = Template.bind({});
TopRight.args = {
  selectedValue: 'Top Right',
  direction: 'topRight',
  items: [
    { content: 'Adjfhgnm,', value: '123', unavailable: false },
    { content: 'Adjfhgnm,', value: '123', unavailable: true },
    { content: 'Adjfhgnm,', value: '123', unavailable: false },
    { content: 'Adjfhgnm,', value: '123', unavailable: false },
    { content: 'Adjfhgnm,', value: '123', unavailable: false },
  ],
};

export const TopLeft = Template.bind({});
TopLeft.args = {
  selectedValue: 'Top Left',
  direction: 'topLeft',
  items: [
    { content: 'Adjfhgnm,', value: '123', unavailable: false },
  ],
};

export const BottomRight = Template.bind({});
BottomRight.args = {
  selectedValue: 'Bottom Right',
  direction: 'bottomRight',
  items: [
    { content: 'Adjfhgnm,', value: '123', unavailable: false },
    { content: 'Adjfhgnm,', value: '123', unavailable: false },
    { content: 'Adjfhgnm,', value: '123', unavailable: false },
    { content: 'Adjfhgnm,', value: '123', unavailable: false },
  ],
};

export const BottomLeft = Template.bind({});
BottomLeft.args = {
  selectedValue: 'Bottom Left',
  direction: 'bottomLeft',
  items: [
    { content: 'Adjfhgnm,', value: '123', unavailable: false },
    { content: 'Adjfhgnm,', value: '123', unavailable: true },
    { content: 'Adjfhgnm,', value: '123', unavailable: false },
    { content: 'Adjfhgnm,', value: '123', unavailable: true },
    { content: 'Adjfhgnm,', value: '123', unavailable: false },
    { content: 'Adjfhgnm,', value: '123', unavailable: false },
  ],
};
