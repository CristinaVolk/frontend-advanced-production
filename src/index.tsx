import { BrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';

import { createRoot } from 'react-dom/client';
import { StoreProvider } from '@/app/providers/StoreProvider';
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { ErrorBoundary } from '@/app/providers/ErrorBoundary';

import App from './app/App';

import '@/shared/config/i18n/i18n';
import './app/styles/index.scss';
import { ThemeEnum } from '@/shared/const/theme';

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
