import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { UiDesignSwitcher } from './UiDesignSwitcher';

export default {
  title: '/UiDesignSwitcher',
  component: UiDesignSwitcher,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof UiDesignSwitcher>;

const Template: ComponentStory<typeof UiDesignSwitcher> = (args) => <UiDesignSwitcher {...args} />;

export const Normal = Template.bind({});
Normal.args = {};



  
