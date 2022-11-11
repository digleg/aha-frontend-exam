import { combineReducers, configureStore } from '@reduxjs/toolkit';

import commonSlice from './slices/commonSlice';
import homeSlice from './slices/homeSlice';

const reducer = combineReducers({
  common: commonSlice,
  search: homeSlice,
});

export const store = configureStore({
  reducer,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type
export type AppDispatch = typeof store.dispatch;
