import { addDecorator } from '@storybook/react';

import { StyleDecorator } from '../../src/shared/config/storybook/decorators/StyleDecorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/decorators/ThemeDecorator';
import { RouterDecorator } from '../../src/shared/config/storybook/decorators/RouterDecorator';
import { StoreDecorator } from '../../src/shared/config/storybook/decorators/StoreDecorator';
import { SuspenseDecorator } from '../../src/shared/config/storybook/decorators/SuspenseDecorator';
import { ThemeEnum } from '../../src/shared/const/theme';
import { FeatureFlagDecorator } from '../../src/shared/config/storybook/decorators/FeatureFlagDecorator';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    layout: 'fullscreen',
    themes: {
        default: 'light',
        list: [
            { name: 'light', class: ThemeEnum.LIGHT, color: '#c3f8ff' },
            { name: 'dark', class: ThemeEnum.DARK, color: '#420516' },
            { name: 'blue', class: ThemeEnum.BLUE, color: '#5880b4' },
        ],
    },
};

addDecorator(
    StoreDecorator({
        loginForm: {
            username: 'admin',
            password: '123',
        },
    }),
);
addDecorator(StyleDecorator);
addDecorator(ThemeDecorator(ThemeEnum.LIGHT));
addDecorator(RouterDecorator);
addDecorator(SuspenseDecorator);
addDecorator(FeatureFlagDecorator({}));
