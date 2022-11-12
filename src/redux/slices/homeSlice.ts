// import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { SearchResultListProps, SearchState } from '../../interfaces/I_home';

const initialState: SearchState = {
  keyword: '',
  resultNumber: 2,
  resultList: [],
  followLoading: false,
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
    setResultList: (state, action: PayloadAction<SearchResultListProps[]>) => ({
      ...state,
      resultList: action.payload,
    }),
    setFollowLoading: (state, action: PayloadAction<boolean>) => ({
      ...state,
      followLoading: action.payload,
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
  setIsSearch,
  setCurrentPage,
  setFollowLoading,
} = searchSlice.actions;

export default searchSlice.reducer;
