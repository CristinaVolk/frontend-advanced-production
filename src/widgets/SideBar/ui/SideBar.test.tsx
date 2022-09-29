import { fireEvent, screen } from '@testing-library/react';
import { SideBar } from 'widgets/SideBar';
import { renderWithTranslations } from 'shared/lib/tests/renderWithTranslations';
import { withTranslation } from 'react-i18next';

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
