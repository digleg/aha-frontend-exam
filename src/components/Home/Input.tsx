import React from 'react';
import { useDispatch } from 'react-redux';
import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

import { useAppSelector } from '../../hook/useAppRedux';
import { setKeyword } from '../../redux/slices/homeSlice';

const KeywordField = styled(TextField)({
  width: '100%',
  '& label.Mui-focused': {
    color: '#FF9B33',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#FF9B33',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      border: '3px solid rgba(255, 255, 255, 0.5)',
    },
    '&:hover fieldset': {
      border: '3px solid #FF9B33',
    },
    '&.Mui-focused fieldset': {
      border: '3px solid #FF9B33',
    },
    input: {
      '&::placeholder': {
        fontFamily: 'Ubuntu',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '14px',
        lineHeight: '150%',
        display: 'flex',
        alignItems: 'center',
        letterSpacing: '0.25px,',
        color: '#FFFFFF',
        opacity: 0.3,
      },
      fontFamily: 'Ubuntu',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: '14px',
      lineHeight: '150%',
      display: 'flex',
      alignItems: 'center',
      letterSpacing: '0.25px',
      color: '#FFFFFF',
    },
  },
});

const Input = () => {
  const dispatch = useDispatch();
  const { keyword } = useAppSelector((state) => state.search);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setKeyword(event.target.value));
  };

  return (
    <div>
      <KeywordField
        value={keyword}
        aria-describedby="keywordField"
        placeholder="Keyword"
        onChange={handleChange}
      />
    </div>
  );
};

export default Input;
