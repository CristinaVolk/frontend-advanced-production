import React, { ReactNode, useMemo } from 'react';
import { Provider } from 'react-redux';
import { ReducersMapObject } from '@reduxjs/toolkit';

import { StateSchema } from '@/app/providers/StoreProvider';
import { createReduxStore } from '../config/store';

interface StoreProviderProps {
    children?: ReactNode;
    initialState?: DeepPartial<StateSchema>;
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
}

export const StoreProvider = (props: StoreProviderProps) => {
    const { children, initialState, asyncReducers } = props;

    const store = useMemo(
        () =>
            createReduxStore(
                initialState as StateSchema,
                asyncReducers as ReducersMapObject<StateSchema>,
            ),
        [initialState, asyncReducers],
    );

    return <Provider store={store}>{children}</Provider>;
};
