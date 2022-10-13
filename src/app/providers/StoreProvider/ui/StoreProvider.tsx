import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { DeepPartial } from '@reduxjs/toolkit';

import { StateSchema } from 'app/providers/StoreProvider';
import { createReduxStore } from '../config/store';

interface StoreProviderProps {
  children?: ReactNode,
  initialState?: DeepPartial<StateSchema>;
  isForStorybook?: boolean;
}

export const StoreProvider = (props: StoreProviderProps) => {
  const { children, initialState, isForStorybook } = props;

  const store = createReduxStore(initialState as StateSchema, isForStorybook);

  return (
       <Provider store={store}>
            {children}
       </Provider>
  );
};
