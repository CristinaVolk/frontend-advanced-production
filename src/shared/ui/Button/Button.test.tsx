import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { render, screen } from '@testing-library/react';

describe('Button test', () => {
  test('component render', () => {
    render(
         <Button
            className="btn"
            theme={ButtonTheme.CLEAR}
         >
              test
         </Button>,
    );
    // screen.debug();
    expect(screen.getByText('test')).toBeInTheDocument();
  });

  test('theme clear', () => {
    render(<Button theme={ButtonTheme.CLEAR} className="btn">Test</Button>);
    // screen.debug();
    expect(screen.getByText('Test')).toHaveClass('clear');
  });
});
