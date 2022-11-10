import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import ContentWrapper from './components/Common/ContentWrapper';
import Home from './pages/Home';
import Tags from './pages/Tags';

const App = () => {
  return (
    <ContentWrapper>
      <Routes>
        <Route path="/" element={<Navigate to="/Home" replace />} />
        <Route path="Home" element={<Home />} />
        <Route path="Tags" element={<Tags />} />
      </Routes>
    </ContentWrapper>
  );
};

export default App;
