import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button as MuiButton, ButtonProps } from '@mui/material';
import { styled } from '@mui/material/styles';

import {
  setIsSearch,
  setLoading,
  setResultList,
} from '../../redux/slices/homeSlice';
import instance, { API_SUB_URL } from '../../utils/axios/index';

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

const Button = () => {
  const { keyword } = useSelector((state: any) => state.search);
  const { resultNumber } = useSelector((state: any) => state.search);
  const dispatch = useDispatch();

  return (
    <div>
      <SearchButton
        onClick={() => {
          dispatch(setLoading(true));
          dispatch(setIsSearch(true));
          instance
            .get(
              `${API_SUB_URL.USER_ALL}?/page=1&pageSize=${resultNumber}&keyword=${keyword}`,
            )
            .then((resp) => {
              console.log(
                '🚀 ~ file: Button.tsx ~ line 36 ~ .then ~ resp',
                resp.data.data,
              );
              dispatch(setResultList(resp.data.data));
              dispatch(setLoading(false));
            });
        }}
        variant="contained"
      >
        SEARCH
      </SearchButton>
    </div>
  );
};

export default Button;
