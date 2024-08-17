import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import './index.css';
import Login from './pages/login/login';
import Home from './pages/home/home';
import Page404 from './pages/page404/Page404';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <Page404/>,
  },
  {
    path: "/home",
    element: <Home/>,
    errorElement: <Page404/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


