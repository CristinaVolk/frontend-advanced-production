import { RouteProps } from 'react-router-dom';

import { MainPageAsync } from 'pages/MainPage';
import { AboutPageAsync } from 'pages/AboutPage';
import { NotFoundPage } from 'pages/NotFoundPage';

import { AppRoutes, RoutePaths } from 'shared/config/routes/routes';

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePaths[AppRoutes.MAIN],
    element: <MainPageAsync />,
  },
  [AppRoutes.ABOUT]: {
    path: RoutePaths[AppRoutes.ABOUT],
    element: <AboutPageAsync />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePaths[AppRoutes.NOT_FOUND],
    element: <NotFoundPage />,
  },
};
