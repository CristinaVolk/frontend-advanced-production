import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator';
import { CommentCard } from './CommentCard';
import { NewDesignDecorator } from '@/shared/config/storybook/decorators/NewDesignDecorator';

export default {
    title: 'entities/CommentCard',
    component: CommentCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => (
    <CommentCard {...args} />
);

const normaArgs = {
    comment: {
        id: '1',
        text: 'some comment',
        user: {
            id: '1',
            username: 'user@user.com',
            avatar: 'https://i1.sndcdn.com/avatars-000756121903-98y986-t500x500.jpg',
        },
    },
};

export const Normal = Template.bind({});
Normal.args = normaArgs;

Normal.decorators = [
    StoreDecorator({
        articleDetailsPage: {
            comments: {
                isLoading: false,
                error: undefined,
                ids: ['1', '2'],
                entities: {
                    1: {
                        id: '1',
                        text: 'comment 1',
                        user: {
                            id: '1',
                            username: 'admin@admin.com',
                            avatar: 'https://i1.sndcdn.com/avatars-000756121903-98y986-t500x500.jpg',
                        },
                    },
                    2: {
                        id: '2',
                        text: 'comment 2',
                        user: {
                            id: '1',
                            username: 'admin@admin.com',
                            avatar: 'https://i1.sndcdn.com/avatars-000756121903-98y986-t500x500.jpg',
                        },
                    },
                },
            },
        },
    }),
];

export const NormalRedesigned = Template.bind({});
NormalRedesigned.args = normaArgs;

NormalRedesigned.decorators = [
    StoreDecorator({
        articleDetailsPage: {
            comments: {
                isLoading: false,
                error: undefined,
                ids: ['1', '2'],
                entities: {
                    1: {
                        id: '1',
                        text: 'comment 1',
                        user: {
                            id: '1',
                            username: 'admin@admin.com',
                            avatar: 'https://i1.sndcdn.com/avatars-000756121903-98y986-t500x500.jpg',
                        },
                    },
                    2: {
                        id: '2',
                        text: 'comment 2',
                        user: {
                            id: '1',
                            username: 'admin@admin.com',
                            avatar: 'https://i1.sndcdn.com/avatars-000756121903-98y986-t500x500.jpg',
                        },
                    },
                },
            },
        },
    }),
    NewDesignDecorator,
];

export const Loading = Template.bind({});
Loading.args = {};

Loading.decorators = [
    StoreDecorator({
        articleDetailsPage: {
            comments: {
                isLoading: true,
                error: undefined,
                ids: ['1', '2'],
                entities: {
                    1: {
                        id: '1',
                        text: 'comment 1',
                        user: {
                            id: '1',
                            username: 'admin@admin.com',
                            avatar: 'https://i1.sndcdn.com/avatars-000756121903-98y986-t500x500.jpg',
                        },
                    },
                    2: {
                        id: '2',
                        text: 'comment 2',
                        user: {
                            id: '1',
                            username: 'admin@admin.com',
                            avatar: 'https://i1.sndcdn.com/avatars-000756121903-98y986-t500x500.jpg',
                        },
                    },
                },
            },
        },
    }),
];
