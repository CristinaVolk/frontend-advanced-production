import { BrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';

import { StoreProvider } from 'app/providers/StoreProvider';
import { ThemeEnum, ThemeProvider } from 'app/providers/ThemeProvider';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { createRoot } from 'react-dom/client';

import App from './app/App';

import 'shared/config/i18n/i18n';
import './app/styles/index.scss';

const container = document.getElementById('root');

if (!container) {
  throw new Error('The root element has not been mounted in the DOM');
}

const root = createRoot(container);

root.render(
     <BrowserRouter>
          <StoreProvider>
               <Suspense fallback="">
                    <ErrorBoundary>
                         <ThemeProvider initialTheme={ThemeEnum.LIGHT}>
                              <App />
                         </ThemeProvider>
                    </ErrorBoundary>
               </Suspense>
          </StoreProvider>
     </BrowserRouter>,
);
