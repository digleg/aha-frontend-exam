import { useDispatch } from 'react-redux';
import { Slider as MuiSlider, SliderProps } from '@mui/material';
import { styled } from '@mui/material/styles';

import { useAppSelector } from '../../hook/useAppRedux';
import { setResultNumber } from '../../redux/slices/homeSlice';

let resultNumberLocal: number;

const ResultsSliderDesktop = styled(MuiSlider)<SliderProps>(() => ({
  '& .MuiSlider-rail': {
    color: '#5d5d5d !important',
    height: '8.5px',
    opacity: '1 !important',
  },
  '& .MuiSlider-track': {
    color: '#181818',
    backgroundImage: 'linear-gradient(270deg, #FFD25F 0.13%, #FF5C01 100%)',
    height: '10.5px',
  },
  '& .MuiSlider-thumb': {
    color: '#181818',
    width: '28px',
    height: '28px',
    border: '7px solid #FFD05D',
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
    marginTop: '2px',
    '&[data-index="0"]': {
      left: '0px !important',
      marginLeft: '1%',
      opacity: `${resultNumberLocal === 2 && 1} !important`,
    },
    '&[data-index="1"]': {
      opacity: `${resultNumberLocal === 19.5 && 1} !important`,
    },
    '&[data-index="2"]': {
      opacity: `${resultNumberLocal === 35.7 && 1} !important`,
    },
    '&[data-index="3"]': {
      opacity: `${resultNumberLocal === 52.5 && 1} !important`,
    },
    '&[data-index="4"]': {
      opacity: `${resultNumberLocal === 69 && 1} !important`,
    },
    '&[data-index="5"]': {
      left: '0% !important',
      marginLeft: '97.7%',
      opacity: `${resultNumberLocal === 91 && 1} !important`,
    },
  },
  height: 8,
  color: '#5d5d5d',
}));

const ResultsSliderMobile = styled(MuiSlider)<SliderProps>(() => ({
  '& .MuiSlider-rail': {
    color: '#5d5d5d',
    height: '9px',
    opacity: '1 !important',
  },
  '& .MuiSlider-track': {
    color: '#181818',
    backgroundImage: 'linear-gradient(270deg, #FFD25F 0.13%, #FF5C01 100%)',
    height: '11px',
  },
  '& .MuiSlider-thumb': {
    color: '#181818',
    width: '28px',
    height: '28px',
    border: '7px solid #FFD05D',
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
    fontWeight: '400',
    fontSize: '14px',
    lineHeight: '150%',
    letterSpacing: '0.25px',
    color: '#FFFFFF',
    opacity: '0.5',
    marginTop: '4px',
    '&[data-index="0"]': {
      left: '0px !important',
      marginLeft: '3%',
      opacity: `${resultNumberLocal === 2 && 1} !important`,
    },
    '&[data-index="1"]': {
      opacity: `${resultNumberLocal === 19.5 && 1} !important`,
    },
    '&[data-index="2"]': {
      opacity: `${resultNumberLocal === 35.7 && 1} !important`,
    },
    '&[data-index="3"]': {
      opacity: `${resultNumberLocal === 52.5 && 1} !important`,
    },
    '&[data-index="4"]': {
      opacity: `${resultNumberLocal === 69 && 1} !important`,
    },
    '&[data-index="5"]': {
      left: '0% !important',
      marginLeft: '95.5%',
      opacity: `${resultNumberLocal === 91 && 1} !important`,
    },
  },
  height: 8,
  color: '#5d5d5d',
}));

const Slider = () => {
  const dispatch = useDispatch();
  const { resultNumber } = useAppSelector((state) => state.search);

  resultNumberLocal = resultNumber;
  const marksDesktop = [
    {
      value: 2,
      label: '3',
    },
    {
      value: 19.5,
      label: '6',
    },
    {
      value: 35.7,
      label: '9',
    },
    {
      value: 52.5,
      label: '12',
    },
    {
      value: 69,
      label: '15',
    },
    {
      value: 91,
      label: '50',
    },
  ];

  const marksMobile = [
    {
      value: 2,
      label: '3',
    },
    {
      value: 19.2,
      label: '6',
    },
    {
      value: 34,
      label: '9',
    },
    {
      value: 49.3,
      label: '12',
    },
    {
      value: 64.9,
      label: '15',
    },
    {
      value: 91,
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
      <div className="hidden xl:block">
        <ResultsSliderDesktop
          value={resultNumber}
          step={null}
          marks={marksDesktop}
          min={1}
          max={93}
          onChange={handleResultsSliderChange}
        />
      </div>
      <div className="ml-[-6px] block w-[100%] xl:hidden">
        <ResultsSliderMobile
          value={resultNumber}
          step={null}
          marks={marksMobile}
          min={-1}
          max={95}
          onChange={handleResultsSliderChange}
        />
      </div>
    </div>
  );
};

export default Slider;
