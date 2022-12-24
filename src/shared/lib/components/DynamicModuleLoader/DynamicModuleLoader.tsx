import { ReactNode, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { Reducer } from '@reduxjs/toolkit';
import { ReduxStoreWithManager, StateSchema, StateSchemaKey } from '@/app/providers/StoreProvider';

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer<NonNullable<StateSchema[name]>>
}

interface DynamicModuleLoaderProps {
  reducers: ReducersList,
  children: ReactNode,
  removeAfterUnmount?: boolean
}

export const DynamicModuleLoader = (props: DynamicModuleLoaderProps) => {
  const {
    reducers, children, removeAfterUnmount = true,
  } = props;
  const dispatch = useDispatch();
  const store = useStore() as ReduxStoreWithManager;

  useEffect(
    () => {
      Object.entries(reducers).forEach(([keyName, reducer]) => {
        if (!(keyName in store.reducerManager.getReducerMap())) {
          store.reducerManager.add(keyName as StateSchemaKey, reducer);
          dispatch({ type: `@INIT ${keyName} reducer` });
        }
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
