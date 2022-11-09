// import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface SearchState {
  keyword: string;
  resultNumber: number;
  resultList: [];
  loading: boolean;
  isSearched: boolean;
}

const initialState: SearchState = {
  keyword: '',
  resultNumber: 15,
  resultList: [],
  loading: false,
  isSearched: true,
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    getKeyword: (_state, _action: any) => undefined,
    setKeyword: (state, action: PayloadAction<string>) => ({
      ...state,
      keyword: action.payload,
    }),
    getResultNumber: (_state, _action: any) => undefined,
    setResultNumber: (state, action: PayloadAction<number>) => ({
      ...state,
      resultNumber: action.payload,
    }),
    getResultList: (_state, _action: any) => undefined,
    setResultList: (state, action: PayloadAction<[]>) => ({
      ...state,
      resultList: action.payload,
    }),
    getLoading: (_state, _action: any) => undefined,
    setLoading: (state, action: PayloadAction<boolean>) => ({
      ...state,
      loading: action.payload,
    }),
    getIsSearch: (_state, _action: any) => undefined,
    setIsSearch: (state, action: PayloadAction<boolean>) => ({
      ...state,
      isSearched: action.payload,
    }),
  },
});

// Action creators are generated for each case reducer function
export const {
  getKeyword,
  setKeyword,
  getResultNumber,
  setResultNumber,
  getResultList,
  setResultList,
  getLoading,
  setLoading,
  getIsSearch,
  setIsSearch,
} = searchSlice.actions;

export default searchSlice.reducer;
