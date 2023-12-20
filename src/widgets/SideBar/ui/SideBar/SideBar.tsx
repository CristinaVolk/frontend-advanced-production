import React from 'react';
import { SideBarRedesigned } from './SideBarRedesigned';
import { ToggleFeatures } from '@/shared/lib/features';
import { SideBarDeprecated } from './SideBarDeprecated';

export const SideBar = () => (
    <ToggleFeatures
        feature="isAppRedesigned"
        on={<SideBarRedesigned />}
        off={<SideBarDeprecated />}
    />
);
