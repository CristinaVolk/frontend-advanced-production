import React, { Suspense } from 'react';
import { Route, RouteProps, Routes } from 'react-router-dom';

import { routeConfig } from 'app/providers/router/config/routeConfig';
import { PageLoader } from 'widgets/PageLoader';

export function AppRouter() {
  return (

       <Routes>
            {Object.values(routeConfig).map(({ path, element }: RouteProps) => (
                 <Route
                    key={path}
                    path={path}
                    element={(
                         <div
                            className="page-wrapper"
                         >
                              <Suspense fallback={<PageLoader />}>{element}</Suspense>
                         </div>
                                   )}
                 />
            ))}
       </Routes>

  );
}
