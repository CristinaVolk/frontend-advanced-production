import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { CommentList } from './CommentList';

export default {
  title: 'entities/CommentList',
  component: CommentList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  comments: [
    {
      user: {
        username: 'admin@admin.com',
        id: '1',
      },
      text: 'hh',
      id: 'GQxGZ9P',
    },
    {
      user: {
        username: 'admin@admin.com',
        id: '1',
      },
      text: '666',
      id: 'UZ8-BvO',
    },
  ],
};

export const LoadingState = Template.bind({
});
LoadingState.args = {
  comments: undefined,
  isLoading: true,
};
