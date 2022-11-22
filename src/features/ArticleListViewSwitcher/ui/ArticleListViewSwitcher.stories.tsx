import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ArticleListViewSwitcher } from './ArticleListViewSwitcher';

export default {
  title: '/ArticleListViewSwitcher',
  component: ArticleListViewSwitcher,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleListViewSwitcher>;

const Template: ComponentStory<typeof ArticleListViewSwitcher> = (args) => <ArticleListViewSwitcher {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
