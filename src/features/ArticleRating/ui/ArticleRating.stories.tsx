import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import ArticleRating from './ArticleRating';
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator';

export default {
    title: 'features/ArticleRating',
    component: ArticleRating,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleRating>;

const Template: ComponentStory<typeof ArticleRating> = (args) => (
    <ArticleRating {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
    articleId: '1',
};
Normal.decorators = [
    StoreDecorator({
        user: {
            authData: {
                id: '1',
            },
        },
    }),
];
Normal.parameters = {
    mockData: [
        {
            url: `${__API__}/article-rating?userId=1&articleId=1`,
            method: 'GET',
            status: 200,
            response: [
                {
                    rate: 4,
                },
            ],
        },
    ],
};

export const NotRated = Template.bind({});
NotRated.args = {
    articleId: '2',
};
NotRated.decorators = [
    StoreDecorator({
        user: {
            authData: {
                id: '1',
            },
        },
    }),
];
NotRated.parameters = {
    mockData: [
        {
            url: `${__API__}/article-rating?userId=1&articleId=2`,
            method: 'GET',
            status: 200,
            response: [],
        },
    ],
};
