import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Slider as MuiSlider, SliderProps } from '@mui/material';
import { styled } from '@mui/material/styles';

import { getResultNumber, setResultNumber } from '../../redux/slices/homeSlice';

const ResultsSlider = styled(MuiSlider)<SliderProps>(() => ({
  '& .MuiSlider-rail': {
    color: '#5d5d5d',
  },
  '& .MuiSlider-track': {
    color: '#181818',
    backgroundImage: 'linear-gradient(270deg, #FFD25F 0.13%, #FF5C01 100%)',
  },
  '& .MuiSlider-thumb': {
    color: '#181818',
    width: '20px',
    height: '20px',
    border: '6px solid #FFD05D',
  },
  '& .MuiSlider-thumb.Mui-focusVisible, .MuiSlider-thumb:hover': {
    color: '#181818',
    boxShadow: 'none !important',
  },
  '& .MuiSlider-mark': {
    display: 'none',
  },
  '& .MuiSlider-markLabel': {
    fontFamily: 'Ubuntu',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '16px',
    lineHeight: '150%',
    letterSpacing: '0.15px',
    color: '#FFFFFF',
    opacity: '0.5',
    marginLeft: '2px',
  },
  '& .MuiSlider-markLabelActive': {
    color: '#FFFFFF',
    opacity: '1',
  },
  height: 8,
  color: '#5d5d5d',
}));

const Slider = () => {
  const dispatch = useDispatch();
  const { resultNumber } = useSelector((state: any) => state.search);

  useEffect(() => {
    dispatch(getResultNumber({}));
  }, [dispatch, resultNumber]);

  const marks = [
    {
      value: 3,
      label: '3',
    },
    {
      value: 6,
      label: '6',
    },
    {
      value: 9,
      label: '9',
    },
    {
      value: 12,
      label: '12',
    },
    {
      value: 15,
      label: '15',
    },
    {
      value: 18,
      label: '50',
    },
  ];

  const handleResultsSliderChange = (
    event: Event,
    value: number | number[],
  ) => {
    dispatch(setResultNumber(value as number));
  };

  return (
    <div>
      <ResultsSlider
        value={resultNumber}
        step={null}
        marks={marks}
        min={3}
        max={18}
        onChange={handleResultsSliderChange}
      />
    </div>
  );
};

export default Slider;
