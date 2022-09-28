import { fireEvent, screen } from '@testing-library/react';
import { withTranslation } from 'react-i18next';
import { SideBar } from './SideBar';
import { renderWithTranslations } from '../../../helpers/tests/renderWithTranslations';

describe('SideBar test', () => {
  test('component render', () => {
    const SideBarWithTranslation = withTranslation()(SideBar);
    renderWithTranslations(<SideBarWithTranslation />);
    // screen.debug();
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('component render', () => {
    const SideBarWithTranslation = withTranslation()(SideBar);
    renderWithTranslations(<SideBarWithTranslation />);

    const toggleButton = screen.getByTestId('sidebar-toggle');
    fireEvent.click(toggleButton);

    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
