import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import SideBar from './components/Common/SideBar';
import Home from './pages/Home';
import Tags from './pages/Tags';

const App = () => {
  return (
    <div className="flex min-h-full flex-col-reverse xl:flex-row">
      <SideBar />
      <Routes>
        <Route path="/" element={<Navigate to="/Home" replace />} />
        <Route path="Home" element={<Home />} />
        <Route path="Tags" element={<Tags />} />
      </Routes>
    </div>
  );
};

export default App;
