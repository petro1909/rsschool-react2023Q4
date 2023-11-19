import { configureStore } from '@reduxjs/toolkit';
import { tvShowsApi } from './tvShowsApi';
import tvShows from './tvShowsSlice';

export const store = configureStore({
  reducer: {
    [tvShowsApi.reducerPath]: tvShowsApi.reducer,
    tvShows,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(tvShowsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
