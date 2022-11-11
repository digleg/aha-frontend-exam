// import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CommonState } from '../../interfaces/I_home';

const initialState: CommonState = {
  loading: false,
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => ({
      ...state,
      loading: action.payload,
    }),
  },
});

// Action creators are generated for each case reducer function
export const { setLoading } = searchSlice.actions;

export default searchSlice.reducer;
