import { combineReducers, configureStore } from '@reduxjs/toolkit';

import homeSlice from './slices/homeSlice';

const reducer = combineReducers({
  search: homeSlice,
});

export const store = configureStore({
  reducer,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type
export type AppDispatch = typeof store.dispatch;
