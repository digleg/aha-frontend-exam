import { useDispatch } from 'react-redux';
import { Button as MuiButton, ButtonProps, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import { useAppSelector } from '../../hook/useAppRedux';
import { setLoading } from '../../redux/slices/commonSlice';
import {
  setCurrentPage,
  setIsSearch,
  setResultList,
} from '../../redux/slices/homeSlice';
import axiosInstance, { API_SUB_URL } from '../../utils/axios/index';
import {
  calculateTrueValueDesktop,
  calculateTrueValueMobile,
} from '../../utils/calculateTrueValue';

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
    backgroundColor: '#121212',
    color: '#FFFFFF',
    border: '1px solid #FFFFFF',
    borderRadius: '4px',
  },
  '& .MuiButtonBase-root': {
    fontWeight: 700,
  },
}));

const Button = ({ type }: AhaButtonProps) => {
  const { keyword, resultNumber, currentPage, resultList } = useAppSelector(
    (state) => state.search,
  );
  const dispatch = useDispatch();

  /**
   * * Decide which function should be called by type
   * * For the purpose of every button in this project
   * * @param: search {string} | more {string}
   */
  let onClickFunctionDesktop;
  let onClickFunctionMobile;

  switch (type) {
    case 'search':
      onClickFunctionDesktop = function click() {
        dispatch(setLoading(true));
        dispatch(setIsSearch(true));
        dispatch(setCurrentPage(1));
        axiosInstance
          .get(
            `${
              API_SUB_URL.USER_ALL
            }?/page=1&pageSize=${calculateTrueValueDesktop(
              resultNumber,
            )}&keyword=${keyword}`,
          )
          .then((resp) => {
            dispatch(setResultList(resp.data.data));
            dispatch(setLoading(false));
          });
      };
      onClickFunctionMobile = function click() {
        dispatch(setLoading(true));
        dispatch(setIsSearch(true));
        dispatch(setCurrentPage(1));
        axiosInstance
          .get(
            `${
              API_SUB_URL.USER_ALL
            }?/page=1&pageSize=${calculateTrueValueMobile(
              resultNumber,
            )}&keyword=${keyword}`,
          )
          .then((resp) => {
            dispatch(setResultList(resp.data.data));
            dispatch(setLoading(false));
          });
      };
      break;
    case 'more':
      onClickFunctionDesktop = function click() {
        dispatch(setLoading(true));
        axiosInstance
          .get(
            `${API_SUB_URL.USER_ALL}?/page=${
              currentPage + 1
            }&pageSize=${calculateTrueValueDesktop(
              resultNumber,
            )}&keyword=${keyword}`,
          )
          .then((resp) => {
            dispatch(setResultList(resultList.concat(...resp.data.data)));
            dispatch(setLoading(false));
          });
      };
      onClickFunctionMobile = function click() {
        dispatch(setLoading(true));
        axiosInstance
          .get(
            `${API_SUB_URL.USER_ALL}?/page=${
              currentPage + 1
            }&pageSize=${calculateTrueValueMobile(
              resultNumber,
            )}&keyword=${keyword}`,
          )
          .then((resp) => {
            dispatch(setResultList(resultList.concat(...resp.data.data)));
            dispatch(setLoading(false));
          });
      };
      break;

    default:
      break;
  }

  return (
    <div>
      <div className="hidden xl:block">
        <SearchButton onClick={onClickFunctionDesktop} variant="contained">
          <Typography
            sx={{ fontWeight: 'bold', fontSize: '14px' }}
            component="span"
          >
            <div className="">{type.toUpperCase()}</div>
          </Typography>
        </SearchButton>
      </div>
      <div className="block xl:hidden">
        <SearchButton onClick={onClickFunctionMobile} variant="contained">
          <Typography
            sx={{ fontWeight: 'bold', fontSize: '14px' }}
            component="span"
          >
            {type.toUpperCase()}
          </Typography>
        </SearchButton>
      </div>
    </div>
  );
};

export default Button;
