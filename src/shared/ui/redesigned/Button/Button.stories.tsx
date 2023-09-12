import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { Button } from './Button';
import { ThemeEnum } from '@/shared/const/theme';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
};

export const ClearDark = Template.bind({});
ClearDark.args = {
    children: 'Text',
    variant: 'clear',
};
ClearDark.decorators = [ThemeDecorator(ThemeEnum.DARK)];

export const Background = Template.bind({});
Background.args = {
    children: 'Click',
    variant: 'clear',
};

export const Outlined = Template.bind({});
Outlined.args = {
    children: 'Neat',
    variant: 'outline',
};

export const Square = Template.bind({});
Background.args = {
    children: '>',
    variant: 'outline',
    square: true,
};

export const SizeMedium = Template.bind({});
SizeMedium.args = {
    children: '>',
    variant: 'outline',
    square: true,
    size: 'm',
};

export const SizeLarge = Template.bind({});
SizeLarge.args = {
    children: '>',
    variant: 'outline',
    square: true,
    size: 'l',
};

export const SizeExtraLarge = Template.bind({});
SizeExtraLarge.args = {
    children: '>',
    variant: 'outline',
    square: true,
    size: 'xl',
};

export const SizeXLDisabled = Template.bind({});
SizeXLDisabled.args = {
    children: 'Login',
    variant: 'outline',
    size: 'xl',
    disabled: true,
};
