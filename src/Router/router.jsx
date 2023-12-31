import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../MainLayout/MainLayout';

import Home from '../pages/Home';
import AboutUs from '../pages/AboutUs';
import Cars from '../pages/Cars';
import Contact from '../pages/Contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about-us',
        element: <AboutUs />,
      },
      {
        path: '/cars',
        element: <Cars />,
      },

      {
        path: '/contact',
        element: <Contact />,
      },
    ],
  },
]);

export default router;
