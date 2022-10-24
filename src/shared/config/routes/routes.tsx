export enum AppRoutes {
	MAIN = 'main',
    ABOUT = 'about',
    NOT_FOUND = 'not-found',
    PROFILE = 'profile'
}

export const RoutePaths: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.NOT_FOUND]: '*',
  [AppRoutes.PROFILE]: '/profile',
};
