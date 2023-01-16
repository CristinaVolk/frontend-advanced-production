import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Rating } from './Rating';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { ThemeEnum } from '@/shared/const/theme';

export default {
    title: 'entities/Rating',
    component: Rating,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Rating>;

const Template: ComponentStory<typeof Rating> = (args) => <Rating {...args} />;

export const Normal = Template.bind({});
Normal.args = {};

export const RatedDark = Template.bind({});
RatedDark.args = {
    rate: 3,
};
RatedDark.decorators = [ThemeDecorator(ThemeEnum.DARK)];
