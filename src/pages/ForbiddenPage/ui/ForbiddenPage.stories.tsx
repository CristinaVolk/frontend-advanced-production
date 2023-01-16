import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import ForbiddenPage from './ForbiddenPage';
import { ThemeEnum } from '@/shared/const/theme';

export default {
    title: 'pages/ForbiddenPage',
    component: ForbiddenPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ForbiddenPage>;

const Template: ComponentStory<typeof ForbiddenPage> = () => <ForbiddenPage />;

export const LightForbiddenPage = Template.bind({});
LightForbiddenPage.args = {};

export const DarkForbiddenPage = Template.bind({});
DarkForbiddenPage.args = {};
DarkForbiddenPage.decorators = [ThemeDecorator(ThemeEnum.DARK)];
