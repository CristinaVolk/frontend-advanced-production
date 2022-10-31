import React, { memo, Suspense, useMemo } from 'react';
import { Route, RouteProps, Routes } from 'react-router-dom';

import { routeConfig } from 'app/providers/router/config/routeConfig';
import { PageLoader } from 'widgets/PageLoader';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';

export const AppRouter = memo(() => {
  const isAuth = useSelector(getUserAuthData);

  const routes = useMemo(() => Object.values(routeConfig).filter((routeItem) => {
    if (routeItem.authOnly && !isAuth) {
      return false;
    }

    return true;
  }), [isAuth]);

  return (
       <Routes>
            {routes.map(({ path, element }: RouteProps) => (
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
});
