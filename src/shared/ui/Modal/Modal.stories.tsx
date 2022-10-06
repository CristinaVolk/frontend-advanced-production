import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Modal } from './Modal';

export default {
  title: 'shared/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid commodi consequatur eligendi impedit incidunt necessitatibus possimus quis saepe sunt totam.\n ',
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const LightVersion = Template.bind({});
LightVersion.args = {
  className: 'light',
};

export const DarkVersion = Template.bind({});
DarkVersion.args = {
  className: 'dark',
};
