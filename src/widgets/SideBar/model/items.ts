import React from 'react';
import { AppRoutes, RoutePaths } from 'shared/config/routes/routes';
import MainIcon from '../../../shared/assets/icons/home.svg';
import AboutIcon from '../../../shared/assets/icons/about.svg';
import ProfileIcon from '../../../shared/assets/icons/profile-icon.svg';

export interface SideBarItemType {
    path: string;
    text: string;
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const SideBarItemsList: SideBarItemType[] = [
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
  {
    path: RoutePaths[AppRoutes.PROFILE],
    text: 'Profile',
    Icon: ProfileIcon,
  },
];
