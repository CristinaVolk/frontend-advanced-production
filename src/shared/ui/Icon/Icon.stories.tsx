import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Icon } from './Icon';
import EyeIcon from '../../assets/icons/eye.svg';

export default {
  title: '/Icon',
  component: Icon,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  Svg: EyeIcon,
};
