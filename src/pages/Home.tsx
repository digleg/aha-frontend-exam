import React from 'react';

// import { useLocation } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
import Profile from '../components/Home/Profile';
import SearchWrapper from '../components/Home/SearchWrapper';
// import { decrement, increment } from '../redux/slices/exampleSlice';
// import { RootState } from '../redux/store';

const Home = () => {
  // const count = useSelector((state: RootState) => state.counter.value);
  // const dispatch = useDispatch();
  // const location = useLocation();
  // console.log('🚀 ~ file: home.tsx ~ line 15 ~ Home ~ location', location);

  return (
    <div className="min-w-screen flex h-full min-h-[calc(100vh-66px)] xl:min-h-screen xl:w-[calc(100vw-80px)]">
      <SearchWrapper />
      <Profile />
      {/* Home Page
      <Link to="/tags">go to tags</Link>
      <button
        type="button"
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <span>{count}</span>
      <button
        type="button"
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button> */}
    </div>
  );
};

export default Home;
