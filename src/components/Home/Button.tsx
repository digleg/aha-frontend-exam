import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button as MuiButton, ButtonProps } from '@mui/material';
import { styled } from '@mui/material/styles';

import {
  setCurrentPage,
  setIsSearch,
  setLoading,
  setResultList,
} from '../../redux/slices/homeSlice';
import instance, { API_SUB_URL } from '../../utils/axios/index';

interface AhaButtonProps {
  type: string;
}

const SearchButton = styled(MuiButton)<ButtonProps>(() => ({
  fontFamily: 'Ubuntu',
  fontStyle: 'normal',
  fontWeight: '700',
  fontSize: '14px',
  lineHeight: '100%',
  width: '100%',
  height: '40px',
  color: '#121212',
  backgroundColor: '#FFFFFF',
  borderRadius: '4px',
  '&:hover': {
    backgroundColor: '#FFFFFF',
  },
}));

const Button = ({ type }: AhaButtonProps) => {
  const { keyword, resultNumber, currentPage, resultList } = useSelector(
    (state: any) => state.search,
  );
  const dispatch = useDispatch();

  /**
   * * Decide which function should be called by type
   * * For the purpose of every button in this project
   * * @param: search {string} | more {string}
   */
  let onClickFunction;
  switch (type) {
    case 'search':
      onClickFunction = function click() {
        dispatch(setLoading(true));
        dispatch(setIsSearch(true));
        dispatch(setCurrentPage(1));
        instance
          .get(
            `${API_SUB_URL.USER_ALL}?/page=1&pageSize=${resultNumber}&keyword=${keyword}`,
          )
          .then((resp) => {
            dispatch(setResultList(resp.data.data));
            dispatch(setLoading(false));
          });
      };
      break;
    case 'more':
      onClickFunction = function click() {
        dispatch(setLoading(true));
        // dispatch(setIsSearch(true));
        instance
          .get(
            `${API_SUB_URL.USER_ALL}?/page=${
              currentPage + 1
            }&pageSize=${resultNumber}&keyword=${keyword}`,
          )
          .then((resp) => {
            dispatch(setResultList(resultList.concat(resp.data.data)));
            dispatch(setLoading(false));
          });
      };
      break;

    default:
      break;
  }

  return (
    <div>
      <SearchButton onClick={onClickFunction} variant="contained">
        {type.toUpperCase()}
      </SearchButton>
    </div>
  );
};

export default Button;
