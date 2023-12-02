import { configureStore } from '@reduxjs/toolkit';
import itemReducer from './itemSlice';

export const store = configureStore({
  reducer: itemReducer,
});
export type RootState = ReturnType<typeof store.getState>;
