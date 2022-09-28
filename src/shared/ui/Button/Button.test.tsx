import { render, screen } from '@testing-library/react';
import { Button, ThemeButton } from './Button';
import i18n from '../../config/i18n/i18n';
import { renderWithTranslations } from '../../../helpers/tests/renderWithTranslations';

describe('Button test', () => {
  test('component render', () => {
    renderWithTranslations(
         <Button
            theme={ThemeButton.CLEAR}
            className="btn"
         >
              {i18n.t('test')}
         </Button>,
    );
    // screen.debug();
    expect(screen.getByText('test')).toBeInTheDocument();
  });

  test('theme clear', () => {
    render(<Button theme={ThemeButton.CLEAR} className="btn">Test</Button>);
    // screen.debug();
    expect(screen.getByText('Test')).toHaveClass('clear');
  });
});
