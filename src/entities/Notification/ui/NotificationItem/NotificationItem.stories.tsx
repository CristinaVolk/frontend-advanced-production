import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { NotificationItem } from './NotificationItem';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { ThemeEnum } from '@/shared/const/theme';

export default {
    title: 'entities/Notification/NotificationItem',
    component: NotificationItem,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof NotificationItem>;

const Template: ComponentStory<typeof NotificationItem> = (args) => (
    <NotificationItem {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
    notification: {
        id: '1',
        title: 'Уведомление 1',
        description: 'Произошло какое-то событие',
    },
};

export const WithLink = Template.bind({});
WithLink.args = {
    notification: {
        id: '2',
        title: 'Уведомление 2',
        description: 'Произошло какое-то событие',
        href: 'http://localhost:3000/admin',
    },
};
WithLink.decorators = [ThemeDecorator(ThemeEnum.BLUE)];
