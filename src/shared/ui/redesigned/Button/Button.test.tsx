import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button test', () => {
    test('component render', () => {
        render(
            <Button className="btn" variant="clear">
                test
            </Button>,
        );
        // screen.debug();
        expect(screen.getByText('test')).toBeInTheDocument();
    });

    test('theme clear', () => {
        render(
            <Button variant="clear" className="btn">
                Test
            </Button>,
        );
        // screen.debug();
        expect(screen.getByText('Test')).toHaveClass('clear');
    });
});
