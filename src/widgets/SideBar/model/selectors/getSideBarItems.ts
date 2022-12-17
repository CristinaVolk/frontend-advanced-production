import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import { AppRoutes, RoutePaths } from '@/shared/config/routes/routes';
import MainIcon from '@/shared/assets/icons/home.svg';
import AboutIcon from '@/shared/assets/icons/about.svg';
import ProfileIcon from '@/shared/assets/icons/profile-icon.svg';
import ArticleIcon from '@/shared/assets/icons/article.svg';
import { SideBarItemType } from '../types/sidebar';

export const getSideBarItems = createSelector(
  getUserAuthData,
  (userData) => {
    const sideBarItemsList: Array<SideBarItemType> = [
      {
        path: RoutePaths[AppRoutes.MAIN],
        text: 'Main',
        Icon: MainIcon,
      },
      {
        path: RoutePaths[AppRoutes.ABOUT],
        text: 'About',
        Icon: AboutIcon,
      },
    ];

    if (userData) {
      sideBarItemsList.push(
        {
          path: RoutePaths[AppRoutes.PROFILE] + userData.id,
          text: 'Profile',
          authOnly: true,
          Icon: ProfileIcon,
        },
        {
          path: RoutePaths[AppRoutes.ARTICLES],
          text: 'Articles',
          authOnly: true,
          Icon: ArticleIcon,
        },
      );
    }

    return sideBarItemsList;
  },
);
