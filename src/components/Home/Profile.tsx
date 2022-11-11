/* eslint-disable react/no-array-index-key */
import React, { UIEvent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { styled, Tab, Tabs, Typography } from '@mui/material';

import { useAppSelector } from '../../hook/useAppRedux';
import { FollowState } from '../../interfaces/I_home';
import { setFollowLoading } from '../../redux/slices/homeSlice';
import axiosInstance, { API_SUB_URL } from '../../utils/axios';

import FollowItem from './FollowItem';
import FollowItemSkeleton from './FollowItemSkeleton';

interface TabPanelProps {
  children: React.ReactNode;
  index: number;
  value: number;
}

const enum VARIABLE {
  FOLLOW_COUNT = 20,
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      style={{ marginLeft: '16px', marginRight: '16px', marginTop: '35px' }}
    >
      {value === index && <Typography component="span">{children}</Typography>}
    </div>
  );
}

const Profile = () => {
  const [follower, setFollower] = useState([]);
  const [followerCurrentPage, setFollowerCurrentPage] = useState(1);
  const [following, setFollowing] = useState([]);
  const [followingCurrentPage, setFollowingCurrentPage] = useState(1);
  const [value, setValue] = React.useState(0);
  const dispatch = useDispatch();
  const { followLoading } = useAppSelector((state) => state.search);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  useEffect(() => {
    dispatch(setFollowLoading(true));
    axiosInstance
      .get(`${API_SUB_URL.USER_ALL}?/?page=1&pageSize=30`)
      .then((resp) => {
        setFollower(resp.data.data);
      });
    axiosInstance
      .get(`${API_SUB_URL.USER_FRIENDS}?/?page=1&pageSize=30`)
      .then((resp) => {
        setFollowing(resp.data.data);
      });
    dispatch(setFollowLoading(false));
  }, [dispatch]);

  interface StyledTabsProps {
    children?: React.ReactNode;
    value: number;
    onChange: (event: React.SyntheticEvent, newValue: number) => void;
  }

  const StyledTabs = styled((props: StyledTabsProps) => (
    <Tabs
      {...props}
      TabIndicatorProps={{
        children: <span className="MuiTabs-indicatorSpan" />,
      }}
    />
  ))({
    '& .MuiTabs-flexContainer': {
      display: 'flex',
      width: '375px',
    },
    '& .MuiButtonBase-root': {
      width: '50%',
      marginTop: '19px',
      marginRight: '0px',
      fontFamily: 'Ubuntu',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: '16px',
      lineHeight: '150%',
      textAlign: 'center',
      letterSpacing: '0.15px',
      color: '#929292',
      opacity: '0.87',
    },
    '& .MuiTabs-indicator': {
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: 'transparent',
    },
    '& .MuiTabs-indicatorSpan': {
      height: '2px',
      width: '100%',
      backgroundColor: '#FFFFFF',
    },
  });

  interface StyledTabProps {
    label: string;
  }

  const StyledTab = styled((props: StyledTabProps) => (
    <Tab disableRipple {...props} />
  ))(({ theme }) => ({
    textTransform: 'none',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    color: 'rgba(255, 255, 255, 0.7)',
    '&.Mui-selected': {
      fontFamily: 'Ubuntu',
      fontStyle: 'normal',
      fontWeight: '700',
      fontSize: '16px',
      lineHeight: '150%',
      textAlign: 'center',
      letterSpacing: '0.15px',
      color: '#FFFFFF',
    },
    '&.Mui-focusVisible': {
      backgroundColor: 'rgba(100, 95, 228, 0.32)',
    },
  }));

  const handleFollowerScroll = (event: UIEvent<HTMLDivElement>) => {
    const CURRENT_SCROLL_TRIGGER_HEIGHT = 1030 * followerCurrentPage;
    if (event.currentTarget.scrollTop >= CURRENT_SCROLL_TRIGGER_HEIGHT) {
      setFollowerCurrentPage(followerCurrentPage + 1);
      axiosInstance
        .get(
          `${API_SUB_URL.USER_ALL}?/?page=${followerCurrentPage}&pageSize=30`,
        )
        .then((resp) => {
          const concatFollowList = follower.concat(resp.data.data);
          setFollower(concatFollowList);
        });
    }
  };
  const handleFollowingScroll = (event: UIEvent<HTMLDivElement>) => {
    const CURRENT_SCROLL_TRIGGER_HEIGHT = 1030 * followingCurrentPage;
    if (event.currentTarget.scrollTop >= CURRENT_SCROLL_TRIGGER_HEIGHT) {
      setFollowingCurrentPage(followingCurrentPage + 1);
      axiosInstance
        .get(
          `${API_SUB_URL.USER_FRIENDS}?/?page=${followingCurrentPage}&pageSize=30`,
        )
        .then((resp) => {
          const concatFollowList = following.concat(resp.data.data);
          setFollowing(concatFollowList);
        });
    }
  };

  return (
    <div className="hidden w-[375px] min-w-[375px] bg-bg-c1B1B1B xl:flex">
      <div>
        <StyledTabs
          value={value}
          onChange={handleChange}
          aria-label="styled tabs example"
        >
          <StyledTab label="Followers" />
          <StyledTab label="Following" />
        </StyledTabs>
        <TabPanel value={value} index={0}>
          <div
            className="max-h-[800px] overflow-y-scroll"
            onScroll={handleFollowerScroll}
          >
            {followLoading &&
              [...Array(VARIABLE.FOLLOW_COUNT)].map((e, i) => (
                <div key={i} className="mb-4">
                  <FollowItemSkeleton />
                </div>
              ))}
            {follower.map((followersItem: FollowState, i: number) => (
              <div className="mb-4" key={i}>
                <FollowItem data={followersItem} />
              </div>
            ))}
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <div
            className="max-h-[800px] overflow-y-scroll"
            onScroll={handleFollowingScroll}
          >
            {followLoading &&
              [...Array(VARIABLE.FOLLOW_COUNT)].map((e, i) => (
                <div key={i} className="mb-4">
                  <FollowItemSkeleton />
                </div>
              ))}
            {following.map((followersItem: FollowState, i: number) => (
              <div className="mb-4" key={i}>
                <FollowItem data={followersItem} />
              </div>
            ))}
          </div>
        </TabPanel>
      </div>
    </div>
  );
};

export default Profile;
