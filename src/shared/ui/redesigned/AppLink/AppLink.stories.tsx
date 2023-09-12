import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { AppLink } from './AppLink';
import { ThemeEnum } from '@/shared/const/theme';

export default {
    title: 'shared/AppLink',
    component: AppLink,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => (
    <AppLink {...args} />
);

export const PrimaryDarkMain = Template.bind({});
PrimaryDarkMain.args = {
    variant: 'primary',
    children: 'Main',
};
PrimaryDarkMain.decorators = [ThemeDecorator(ThemeEnum.DARK)];

export const RedMain = Template.bind({});
RedMain.args = {
    variant: 'red',
    children: 'Main',
};

export const PrimaryLightAbout = Template.bind({});
PrimaryLightAbout.args = {
    variant: 'primary',
    children: 'About',
};

export const RedDarkAbout = Template.bind({});
RedDarkAbout.args = {
    variant: 'red',
    children: 'About',
};
RedDarkAbout.decorators = [ThemeDecorator(ThemeEnum.DARK)];
