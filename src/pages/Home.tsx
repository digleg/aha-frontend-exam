import React from 'react';

import Profile from '../components/Home/Profile';
import SearchWrapper from '../components/Home/SearchWrapper';

const Home = () => {
  return (
    <div className="min-w-screen flex h-full min-h-[calc(100vh-66px)] pb-[66px] xl:min-h-screen xl:w-[calc(100vw-80px)] xl:pb-0">
      <SearchWrapper />
      <Profile />
    </div>
  );
};

export default Home;
