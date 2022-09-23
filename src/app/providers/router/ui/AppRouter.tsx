import React, { Suspense } from 'react';
import { Route, RouteProps, Routes } from 'react-router-dom';

import { routeConfig } from 'app/providers/router/config/routeConfig';

export function AppRouter() {
  return (
       <Suspense fallback={<h1>Loading...</h1>}>
            <Routes>
                 {
                         Object.values(routeConfig).map(({ path, element }: RouteProps) => (
                              <Route
                                   key={path}
                                   path={path}
                                   element={(
                                        <div
                                             className="page-wrapper"
                                        >
                                             {element}
                                        </div>
                                   )}
                              />
                         ))
                    }
            </Routes>
       </Suspense>
  );
}
