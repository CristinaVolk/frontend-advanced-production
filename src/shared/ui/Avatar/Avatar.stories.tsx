import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { ThemeEnum } from 'app/providers/ThemeProvider';
import { Avatar } from './Avatar';
import AvatarImg from '../../assets/images/wolf_400x400.jpeg';

export default {
  title: 'shared/Avatar',
  component: Avatar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const DefaultAvatar = Template.bind({});
DefaultAvatar.args = {
  src: AvatarImg,
  alt: 'avatar',
};

export const SmallAvatar = Template.bind({});
SmallAvatar.args = {
  src: AvatarImg,
  alt: 'avatar',
  size: 50,
};

export const BigAvatar = Template.bind({});
BigAvatar.args = {
  src: AvatarImg,
  alt: 'avatar',
  size: 350,
};

export const DarkVersion = Template.bind({});
DarkVersion.args = {
  src: AvatarImg,
  alt: 'avatar',
};
DarkVersion.decorators = [ThemeDecorator(ThemeEnum.DARK)];
