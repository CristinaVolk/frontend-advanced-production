import { ReactNode, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import {
  ReduxStoreWithManager, StateSchemaKey,
} from 'app/providers/StoreProvider/config/StateSchema';
import { Reducer } from '@reduxjs/toolkit';

export type ReducersList = {
  [keyName in StateSchemaKey]?: Reducer
}

// type ReducersListEntry = [
//   StateSchemaKey, Reducer
// ]

interface DynamicModuleLoaderProps {
  reducers: ReducersList,
  children: ReactNode,
  removeAfterUnmount?: boolean
}

export const DynamicModuleLoader = (props: DynamicModuleLoaderProps) => {
  const {
    reducers, children, removeAfterUnmount = false,
  } = props;
  const dispatch = useDispatch();
  const store = useStore() as ReduxStoreWithManager;

  useEffect(
    () => {
      Object.entries(reducers).forEach(([keyName, reducer]) => {
        store.reducerManager.add(keyName as StateSchemaKey, reducer);
        dispatch({ type: `@INIT ${keyName} reducer` });
      });

      return () => {
        if (removeAfterUnmount) {
          Object.entries(reducers).forEach(([keyName]) => {
            store.reducerManager.remove(keyName as StateSchemaKey);
            dispatch({ type: `@DESTROY ${keyName}  reducer` });
          });
        }
      };
    }, // eslint-disable-next-line
    []);

  return (
       <>
            {children}
       </>
  );
};
