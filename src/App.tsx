import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import SideBar from './components/Common/SideBar';
import Home from './pages/Home';
import Tags from './pages/Tags';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/home',
      element: <Home />,
    },
    {
      path: '/tags',
      element: <Tags />,
    },
  ]);
  return (
    <div className="flex min-h-full flex-col-reverse xl:flex-row">
      <SideBar />
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
