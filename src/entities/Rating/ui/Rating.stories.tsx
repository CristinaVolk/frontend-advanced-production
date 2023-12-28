import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Rating } from './Rating';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { ThemeEnum } from '@/shared/const/theme';
import { NewDesignDecorator } from '@/shared/config/storybook/decorators/NewDesignDecorator';

export default {
    title: 'entities/Rating',
    component: Rating,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Rating>;

const Template: ComponentStory<typeof Rating> = (args) => <Rating {...args} />;
const mockArgs = {
    rate: 3,
};

export const Normal = Template.bind({});
Normal.args = {};

export const RatedDark = Template.bind({});
RatedDark.args = mockArgs;
RatedDark.decorators = [ThemeDecorator(ThemeEnum.DARK)];

export const RatedDarkRedesigned = Template.bind({});
RatedDarkRedesigned.args = mockArgs;
RatedDarkRedesigned.decorators = [
    NewDesignDecorator,
    ThemeDecorator(ThemeEnum.DARK),
];
