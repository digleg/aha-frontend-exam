import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import SideBar from './components/SideBar';
import Home from './pages/Home';
import Tags from './pages/Tags';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/tags',
      element: <Tags />,
    },
  ]);
  return (
    <div className="min-h-full flex xl:flex-row flex-col-reverse">
      <SideBar />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
