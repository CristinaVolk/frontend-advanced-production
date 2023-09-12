import React from 'react';
import { ToggleFeatures } from '@/shared/lib/features';
import { SideBarRedesigned } from './SideBarRedesigned';
import { SideBarDeprecated } from './SideBarDeprecated';

export const SideBar = () => (
    <ToggleFeatures
        feature="isAppRedesigned"
        on={<SideBarRedesigned />}
        off={<SideBarDeprecated />}
    />
);
