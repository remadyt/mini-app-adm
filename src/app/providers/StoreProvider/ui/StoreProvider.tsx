import type { PropsWithChildren } from 'react';

import { Provider } from 'react-redux';

import { StateSchema } from '../config/stateSchema';
import { createReduxStore } from '../config/store';

interface StoreProviderProps extends PropsWithChildren {
  initialState?: StateSchema;
}

export const StoreProvider = (props: StoreProviderProps) => {
  const { children, initialState } = props;

  const store = createReduxStore(initialState);

  return <Provider store={store}>{children}</Provider>;
};
