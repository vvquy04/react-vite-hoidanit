import React from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import App from './App';
import LoginPage from './pages/login';
import RegisterPage from './pages/register';
import UserPage from './pages/user';
import ProductPage from './pages/product';
import "./styles/global.css"

// Router định nghĩa đường dẫn
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/login",
    element: <LoginPage/>
  },
  {
    path: "/register",
    element: <RegisterPage/>
  }
  ,
  {
    path: "/users",
    element: <UserPage/>
  }
  ,
  {
    path: "/products",
    element: <ProductPage/>
  }
]);

// Render
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
