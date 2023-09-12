import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import MainIconDeprecated from '@/shared/assets/icons/home-deprecated.svg';
import AboutIconDeprecated from '@/shared/assets/icons/about-deprecated.svg';
import ProfileIconDeprecated from '@/shared/assets/icons/profile-icon-deprecated.svg';
import ArticleIconDeprecated from '@/shared/assets/icons/article-deprecated.svg';
import { SideBarItemType } from '../types/sidebar';
import {
    getRouteAbout,
    getRouteArticles,
    getRouteMain,
    getRouteProfile,
} from '@/shared/const/router';

import MainIcon from '@/shared/assets/icons/home.svg';
import AboutIcon from '@/shared/assets/icons/info.svg';
import ProfileIcon from '@/shared/assets/icons/profile.svg';
import ArticleIcon from '@/shared/assets/icons/article.svg';
import { toggleFeatures } from '@/shared/lib/features';

export const getSideBarItems = createSelector(getUserAuthData, (userData) => {
    const sideBarItemsList: Array<SideBarItemType> = [
        {
            path: getRouteMain(),
            text: 'Main',
            Icon: toggleFeatures({
                name: 'isAppRedesigned',
                on: () => MainIcon,
                off: () => MainIconDeprecated,
            }),
        },
        {
            path: getRouteAbout(),
            text: 'About',
            Icon: toggleFeatures({
                name: 'isAppRedesigned',
                on: () => AboutIcon,
                off: () => AboutIconDeprecated,
            }),
        },
    ];

    if (userData) {
        sideBarItemsList.push(
            {
                path: getRouteProfile(userData.id),
                text: 'Profile',
                authOnly: true,
                Icon: toggleFeatures({
                    name: 'isAppRedesigned',
                    on: () => ProfileIcon,
                    off: () => ProfileIconDeprecated,
                }),
            },
            {
                path: getRouteArticles(),
                text: 'Articles',
                authOnly: true,
                Icon: toggleFeatures({
                    name: 'isAppRedesigned',
                    on: () => ArticleIcon,
                    off: () => ArticleIconDeprecated,
                }),
            },
        );
    }

    return sideBarItemsList;
});
