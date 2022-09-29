import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { render, screen } from '@testing-library/react';

describe('Button test', () => {
  test('component render', () => {
    render(
         <Button
            className="btn"
            theme={ThemeButton.CLEAR}
         >
              test
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
