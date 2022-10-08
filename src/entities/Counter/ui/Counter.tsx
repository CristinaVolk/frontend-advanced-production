import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../model/slice/counterSlice';

export const Counter = () => {
  const dispatch = useDispatch();
  const counterValue = useSelector(getCounterValue);
  const { t } = useTranslation();

  const decrement = () => {
    dispatch(counterActions.decrement());
  };

  const increment = () => {
    dispatch(counterActions.increment());
  };

  return (
       <div>
            <h1 data-testid="value-title">
                 {t('value')}
                 {' '}
                 :
                 {counterValue}
            </h1>
            <Button
               data-testid="increment-btn"
               theme={ButtonTheme.ROUNDED}
               onClick={increment}
            >
                 {t('Increment')}
            </Button>
            <Button
               data-testid="decrement-btn"
               theme={ButtonTheme.ROUNDED}
               onClick={decrement}
            >
                 {t('Decrement')}

            </Button>
       </div>
  );
};
