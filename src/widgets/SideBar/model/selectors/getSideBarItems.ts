import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import MainIcon from '@/shared/assets/icons/home.svg';
import AboutIcon from '@/shared/assets/icons/about.svg';
import ProfileIcon from '@/shared/assets/icons/profile-icon.svg';
import ArticleIcon from '@/shared/assets/icons/article.svg';
import { SideBarItemType } from '../types/sidebar';
import {
    getRouteAbout,
    getRouteArticles,
    getRouteMain,
    getRouteProfile,
} from '@/shared/const/router';

export const getSideBarItems = createSelector(getUserAuthData, (userData) => {
    const sideBarItemsList: Array<SideBarItemType> = [
        {
            path: getRouteMain(),
            text: 'Main',
            Icon: MainIcon,
        },
        {
            path: getRouteAbout(),
            text: 'About',
            Icon: AboutIcon,
        },
    ];

    if (userData) {
        sideBarItemsList.push(
            {
                path: getRouteProfile(userData.id),
                text: 'Profile',
                authOnly: true,
                Icon: ProfileIcon,
            },
            {
                path: getRouteArticles(),
                text: 'Articles',
                authOnly: true,
                Icon: ArticleIcon,
            },
        );
    }

    return sideBarItemsList;
});
