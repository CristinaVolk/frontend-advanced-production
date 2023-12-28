import React from 'react';
import { userJsonSettingsSelector } from '@/entities/User';
import { ThemeProvider } from './ThemeProvider';
import { ThemeEnum } from '@/shared/const/theme';

export const withTheme = (Component: React.ComponentType) => () => {
    const { theme: defaultTheme } = userJsonSettingsSelector();
    return (
        <ThemeProvider initialTheme={defaultTheme || ThemeEnum.LIGHT}>
            <Component />
        </ThemeProvider>
    );
};
