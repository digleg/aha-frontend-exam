import React from 'react';
import { Link } from 'react-router-dom';

const Tags = () => {
  // const navigate = useNavigate();
  return (
    <div className="h-[calc(100vh-66px)]">
      Tags Page
      <Link to="/">go to home</Link>
    </div>
  );
};

export default Tags;
