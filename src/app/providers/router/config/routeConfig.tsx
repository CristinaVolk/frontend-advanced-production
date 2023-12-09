import { MainPageAsync } from '@/pages/MainPage';
import { AboutPageAsync } from '@/pages/AboutPage';
import { ProfilePageAsync } from '@/pages/ProfilePage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { ArticlePageAsync } from '@/pages/ArticlePage';
import { ArticleDetailsPageAsync } from '@/pages/ArticleDetailsPage';
import { ArticleEditPageAsync } from '@/pages/ArticleEditPage';
import { AdminPanelPageAsync } from '@/pages/AdminPanelPage';
import { ForbiddenPageAsync } from '@/pages/ForbiddenPage';
import { Roles } from '@/entities/User';
import {
    AppRoutes,
    getRouteAbout,
    getRouteAdmin,
    getRouteArticleCreate,
    getRouteArticleDetails,
    getRouteArticleEdit,
    getRouteArticles,
    getRouteForbidden,
    getRouteMain,
    getRouteProfile,
    getRouteSettings,
} from '@/shared/const/router';
import { AppRoutesProps } from '@/shared/types/router';
import { SettingsPageAsync } from '@/pages/SettingsPage';

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.MAIN]: {
        path: getRouteMain(),
        element: <MainPageAsync />,
    },
    [AppRoutes.ABOUT]: {
        path: getRouteAbout(),
        element: <AboutPageAsync />,
    },
    [AppRoutes.SETTINGS]: {
        path: getRouteSettings(),
        element: <SettingsPageAsync />,
    },
    [AppRoutes.PROFILE]: {
        path: getRouteProfile(':id'),
        element: <ProfilePageAsync />,
        authOnly: true,
    },
    [AppRoutes.ARTICLES]: {
        path: getRouteArticles(),
        element: <ArticlePageAsync />,
        authOnly: true,
    },
    [AppRoutes.ARTICLES_DETAILS]: {
        path: getRouteArticleDetails(':id'),
        element: <ArticleDetailsPageAsync />,
        authOnly: true,
    },
    [AppRoutes.ARTICLE_EDIT]: {
        path: getRouteArticleEdit(':id'),
        element: <ArticleEditPageAsync />,
        authOnly: true,
    },
    [AppRoutes.ARTICLE_CREATE]: {
        path: getRouteArticleCreate(),
        element: <ArticleEditPageAsync />,
        authOnly: true,
    },
    [AppRoutes.ADMIN_PANEL]: {
        path: getRouteAdmin(),
        element: <AdminPanelPageAsync />,
        authOnly: true,
        roles: [Roles.MANAGER, Roles.ADMIN],
    },
    [AppRoutes.FORBIDDEN]: {
        path: getRouteForbidden(),
        element: <ForbiddenPageAsync />,
        authOnly: true,
    },
    [AppRoutes.NOT_FOUND]: {
        path: '*',
        element: <NotFoundPage />,
    },
};
