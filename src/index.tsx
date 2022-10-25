import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';

import { StoreProvider } from 'app/providers/StoreProvider';
import { ThemeEnum, ThemeProvider } from 'app/providers/ThemeProvider';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';

import App from './app/App';

import 'shared/config/i18n/i18n';
import './app/styles/index.scss';

render(
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
     document.getElementById('root'),
);
