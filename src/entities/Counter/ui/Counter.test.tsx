import { screen } from '@testing-library/react';
import { withTranslation } from 'react-i18next';
import { userEvent } from '@storybook/testing-library';

import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { Counter } from 'entities/Counter';

describe('Counter', () => {
  const componentRenderOptions = {
    route: '/',
    initialState: {
      counter: {
        value: 1,
      },
    },
  };

  beforeEach(() => {
    const CounterWithTranslation = withTranslation()(Counter);
    componentRender(<CounterWithTranslation />, componentRenderOptions);
  });

  test('test render', () => {
    expect(screen.getByTestId('value-title')).toHaveTextContent('1');
  });

  test('test button increment', () => {
    userEvent.click(screen.getByTestId('increment-btn'));
    expect(screen.getByTestId('value-title')).toHaveTextContent('2');
  });

  test('test button decrement', () => {
    userEvent.click(screen.getByTestId('decrement-btn'));
    expect(screen.getByTestId('value-title')).toHaveTextContent('0');
  });
});
