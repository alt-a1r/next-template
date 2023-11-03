import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { rootReducer } from './rootReducer';
import { env, environments } from '@/config/env';

export function makeStore() {
  return configureStore({
    reducer: rootReducer,
    devTools: env.environment === environments.DEV,
  });
}

export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = AppStore['dispatch'];
export type RootState = ReturnType<AppStore['getState']>;

export const wrapper = createWrapper<AppStore>(makeStore);
