/* eslint-disable no-nested-ternary */
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Badge, BadgeProps, IconButton, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import { setIsSearch, setResultList } from '../../redux/slices/homeSlice';

interface Props {
  title: string;
  path: string;
  active: boolean;
}

const SideBarItem = ({ title, path, active }: Props) => {
  const dispatch = useDispatch();

  const StyledBadge = styled(Badge)<BadgeProps>(() => ({
    '& .MuiBadge-badge': {
      right: 5,
      top: 6,
      backgroundColor: '#00D1FF',
      display: 'none',
      minWidth: '5px',
      height: '5px',
      // display: path === 'home' ? 'block' : 'none',
    },
    '@media screen and (min-width: 1440px)': {
      '& .MuiBadge-badge': {
        display: path === 'Home' ? 'none' : active ? 'none' : 'block',
      },
    },
  }));

  return (
    <StyledBadge variant="dot">
      <Link
        to={path}
        onClick={() => {
          dispatch(setIsSearch(false));
          dispatch(setResultList([]));
        }}
      >
        <div className="flex xl:flex-col xl:items-center">
          <IconButton aria-label="SideBarItem">
            <img
              width="19.76"
              height="20.04"
              src={`/svgs/books_${active ? 'active' : 'inactive'}.svg`}
              alt="Logo"
            />
          </IconButton>
          {active && (
            <div className="hidden leading-[0px] xl:block">
              <Typography
                component="span"
                sx={{
                  fontWeight: '300',
                  fontSize: '12px',
                  letterSpacing: '0.4px',
                  fontFamily: 'Ubuntu',
                  lineHeight: '6px',
                }}
              >
                {title}
              </Typography>
            </div>
          )}
        </div>
      </Link>
    </StyledBadge>
  );
};

export default SideBarItem;
