import { configureStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { CombinedState } from 'redux';
import { userReducer } from '@/entities/User';
import { createReducerManager } from '../config/reducerManager';
import { $api } from '@/shared/api/api';
import { scrollMemorizingReducer } from '@/features/ScrollMemorizing';
import { rtkApi } from '@/shared/api/rtkApi';
import {
    ReduxStoreWithManager,
    StateSchema,
    ThunkExtraArg,
} from './StateSchema';

export function createReduxStore(
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>,
) {
    const rootReducer: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        user: userReducer,
        scrollMemorizing: scrollMemorizingReducer,
        [rtkApi.reducerPath]: rtkApi.reducer,
    };

    const reducerManager = createReducerManager(rootReducer);
    const extraThunk: ThunkExtraArg = {
        api: $api,
    };

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
        preloadedState: initialState,
        devTools: __IS_DEV__,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                thunk: { extraArgument: extraThunk },
            }).concat(rtkApi.middleware),
    });

    (store as ReduxStoreWithManager).reducerManager = reducerManager;

    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
