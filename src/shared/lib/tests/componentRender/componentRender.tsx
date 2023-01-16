import { ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import { render } from '@testing-library/react';

import { ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import i18nextForTesting from '@/shared/config/i18n/i18nextForTesting';
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { ThemeEnum } from '@/shared/const/theme';
// eslint-disable-next-line kvolk-plugin/layer-import
import '@/app/styles/index.scss';

interface ComponentRenderOptions {
    route?: string;
    initialState?: DeepPartial<StateSchema>;
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
    theme?: ThemeEnum;
}

interface TestProviderProps {
    children: ReactNode;
    options?: ComponentRenderOptions;
}

export function TestProvider(props: TestProviderProps) {
    const { options = {}, children } = props;

    const {
        route = '/',
        asyncReducers,
        initialState,
        theme = ThemeEnum.LIGHT,
    } = options;

    return (
        <MemoryRouter initialEntries={[route]}>
            <StoreProvider
                asyncReducers={asyncReducers}
                initialState={initialState}
            >
                <ThemeProvider initialTheme={theme}>
                    <I18nextProvider i18n={i18nextForTesting}>
                        <div className={`app ${theme}`}>{children}</div>
                    </I18nextProvider>
                </ThemeProvider>
            </StoreProvider>
        </MemoryRouter>
    );
}

export function componentRender(
    component: ReactNode,
    options?: ComponentRenderOptions,
) {
    return render(<TestProvider options={options}>{component}</TestProvider>);
}
