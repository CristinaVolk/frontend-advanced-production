export enum AppRoutes {
	MAIN = 'main',
    ABOUT = 'about',
    NOT_FOUND = 'not-found',
    PROFILE = 'profile',
    ARTICLES = 'articles',
    ARTICLE_DETAILS = 'article-details'

}

export const RoutePaths: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.PROFILE]: '/profile',
  [AppRoutes.ARTICLES]: '/articles',
  [AppRoutes.ARTICLE_DETAILS]: '/article-details/',
  [AppRoutes.NOT_FOUND]: '*',
};
