import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { tvShowsApi } from './tvShowsApi';
import { createWrapper } from 'next-redux-wrapper';

const rootReducer = combineReducers({
  [tvShowsApi.reducerPath]: tvShowsApi.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ immutableCheck: false, serializableCheck: false }).concat(
        tvShowsApi.middleware
      ),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export const wrapper = createWrapper<AppStore>(setupStore, { debug: true });
