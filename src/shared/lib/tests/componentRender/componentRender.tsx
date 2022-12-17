import { ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import { render } from '@testing-library/react';

import { ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import i18nextForTesting from '@/shared/config/i18n/i18nextForTesting';

interface ComponentRenderOptions {
  route?: string;
  initialState?: DeepPartial<StateSchema>;
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
}

export function componentRender(component: ReactNode, options: ComponentRenderOptions = {}) {
  const {
    route = '/',
    initialState,
    asyncReducers,
  } = options;

  return render(
       <MemoryRouter initialEntries={[route]}>
            <StoreProvider asyncReducers={asyncReducers} initialState={initialState}>
                 <I18nextProvider i18n={i18nextForTesting}>
                      {component}
                 </I18nextProvider>
            </StoreProvider>
       </MemoryRouter>,
  );
}
