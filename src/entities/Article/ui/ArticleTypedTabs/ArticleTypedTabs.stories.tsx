import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ArticleTypedTabs } from './ArticleTypedTabs';

export default {
  title: 'entities/ArticleTypedTabs',
  component: ArticleTypedTabs,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleTypedTabs>;

const Template: ComponentStory<typeof ArticleTypedTabs> = (args) => <ArticleTypedTabs {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
