import { combineReducers, configureStore, PreloadedState } from '@reduxjs/toolkit';
import { tvShowsApi } from './tvShowsApi';
import tvShows from './tvShowsSlice';

const rootReducer = combineReducers({
  [tvShowsApi.reducerPath]: tvShowsApi.reducer,
  tvShows,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ immutableCheck: false, serializableCheck: false }).concat(
        tvShowsApi.middleware
      ),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
