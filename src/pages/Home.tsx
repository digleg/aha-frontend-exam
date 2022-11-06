import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  // const navigate = useNavigate();
  return (
    <div>
      Home Page
      <Link to="/tags">go to tags</Link>
    </div>
  );
};

export default Home;
