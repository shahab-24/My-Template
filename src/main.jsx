import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';

import './index.css';
import React from 'react';

import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import Register from './Register/Register';

const router = createBrowserRouter ([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/signup',
        element: <Signup />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
    ],
  },
]);

createRoot (document.getElementById ('root')).render (
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
