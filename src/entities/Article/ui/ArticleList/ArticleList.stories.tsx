import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ArticleBlockType, ArticleType, ArticleView } from '../../model/const/const';
import { Article } from '../../model/types/Article';
import { ArticleList } from './ArticleList';

export default {
  title: 'entities/ArticleList',
  component: ArticleList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleList>;

const Template: ComponentStory<typeof ArticleList> = (args) => <ArticleList {...args} />;

const article: Article = {
  id: '1',
  title: 'Javascript news',
  subtitle: 'Что нового в JS за 2022 год?',
  img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
  views: 1022,
  createdAt: '26.02.2022',
  type: [ArticleType.IT, ArticleType.SCIENCE, ArticleType.ECONOMICS, ArticleType.IT],
  blocks: [
    {
      id: '1',
      type: ArticleBlockType.TEXT,
      title: 'Заголовок этого блока',
      paragraphs: ['Программа, которую по традиции называют «Hello, world!», очень проста.'],
    },
    {
      id: '4',
      type: ArticleBlockType.CODE,
      code: '<!DOCTYPE html>\n<html>\n  <body>\n    '
        + '<p id="hello"></p>\n\n    <script>\n      '
        + 'document.getElementById("hello").innerHTML = "Hello, world!";\n    '
        + '</script>\n  </body>\n</html>;',
    },
    {
      id: '5',
      type: ArticleBlockType.TEXT,
      title: 'Заголовок этого блока',
      paragraphs: [
        'Программа, которую по традиции называют «Hello, world!», очень проста. '
        + 'Она выводит куда-либо фразу «Hello, world!», или другую подобную, '
        + 'средствами некоего языка.',
        'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном ',
      ],
    },
  ],
  user: {
    id: '1',
    username: 'admin@admin.com',
    avatar: 'https://pbs.twimg.com/profile_images/540611068721364992/J4ityfdN_400x400.jpeg',
  },
};
const articleList = [
  article, article, article,
  article, article, article,
  article, article, article,
];

export const Normal = Template.bind({});
Normal.args = {
  articles: articleList,
  isLoading: false,
  view: ArticleView.LIST,
};
