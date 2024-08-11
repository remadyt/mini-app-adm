import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';

import { StateSchema } from './stateSchema';

export function createReduxStore(initialState?: StateSchema) {
  const rootReducers: ReducersMapObject<StateSchema> = {};

  const store = configureStore({
    reducer: rootReducers,
    preloadedState: initialState,
  });

  return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
export type RootState = ReturnType<typeof createReduxStore>['getState'];
