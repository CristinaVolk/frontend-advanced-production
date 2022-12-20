import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { DraggableDrawer } from './DraggableDrawer';

export default {
  title: 'shared/DraggableDrawer',
  component: DraggableDrawer,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof DraggableDrawer>;

const Template: ComponentStory<typeof DraggableDrawer> = (args) => <DraggableDrawer {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
