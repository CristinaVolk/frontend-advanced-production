import { fireEvent, screen } from '@testing-library/react';
import { withTranslation } from 'react-i18next';

import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';
import { SideBar } from './SideBar';

describe('SideBar test', () => {
    test('component render', () => {
        const SideBarWithTranslation = withTranslation()(SideBar);
        componentRender(<SideBarWithTranslation />);
        screen.debug();
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('component render', () => {
        const SideBarWithTranslation = withTranslation()(SideBar);
        componentRender(<SideBarWithTranslation />);

        const toggleButton = screen.getByTestId('sidebar-toggle');
        fireEvent.click(toggleButton);

        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
