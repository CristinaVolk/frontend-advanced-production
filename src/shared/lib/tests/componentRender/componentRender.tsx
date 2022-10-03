import { ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import { render } from '@testing-library/react';

import i18nextForTesting from 'shared/config/i18n/i18nextForTesting';

interface ComponentRenderOptions {
    route?: string;
}

export function componentRender(component: ReactNode, options: ComponentRenderOptions = {}) {
  const { route = '/' } = options;
  return render(
       <MemoryRouter initialEntries={[route]}>
            <I18nextProvider i18n={i18nextForTesting}>
                 {component}
            </I18nextProvider>
       </MemoryRouter>,
  );
}
