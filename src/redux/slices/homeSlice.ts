// import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface SearchState {
  keyword: string;
  resultNumber: number;
  resultList: [];
  loading: boolean;
  isSearched: boolean;
  currentPage: number;
}

const initialState: SearchState = {
  keyword: '',
  resultNumber: 15,
  resultList: [],
  loading: false,
  isSearched: false,
  currentPage: 1,
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setKeyword: (state, action: PayloadAction<string>) => ({
      ...state,
      keyword: action.payload,
    }),
    setResultNumber: (state, action: PayloadAction<number>) => ({
      ...state,
      resultNumber: action.payload,
    }),
    setResultList: (state, action: PayloadAction<[]>) => ({
      ...state,
      resultList: action.payload,
    }),
    setLoading: (state, action: PayloadAction<boolean>) => ({
      ...state,
      loading: action.payload,
    }),
    setIsSearch: (state, action: PayloadAction<boolean>) => ({
      ...state,
      isSearched: action.payload,
    }),
    setCurrentPage: (state, action: PayloadAction<number>) => ({
      ...state,
      currentPage: action.payload,
    }),
  },
});

// Action creators are generated for each case reducer function
export const {
  setKeyword,
  setResultNumber,
  setResultList,
  setLoading,
  setIsSearch,
  setCurrentPage,
} = searchSlice.actions;

export default searchSlice.reducer;
