import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// components//
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import Destination from './Components/Navbar/Destination/Destination';
import Blog from './Components/Navbar/Blogs/Blog';
import Contact from './Components/Navbar/Contact/Contact';
import Login from './Components/Authorication/Login/Login';
import Register from './Components/Authorication/Login/Register/Register';
import AuthProvider from './Components/Authorication/Login/AuthProvider/AuthProvider';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader:() => fetch('/tourist.json'),
      },
      {
        path:'/destination',
        element:<Destination></Destination>
      },
      {
        path:'/blog',
        element:<Blog></Blog>
      },
      {
        path:'/contact',
        element:<Contact></Contact>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      </AuthProvider>
  </React.StrictMode>,
)
