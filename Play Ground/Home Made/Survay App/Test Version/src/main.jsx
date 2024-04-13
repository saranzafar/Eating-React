import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'flowbite';

import { Route, createBrowserRouter, RouterProvider, createRoutesFromElements } from 'react-router-dom';
import { Login, OTP, Signup, ErrorPage } from "./pages";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='/' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/otp' element={<OTP />} />

      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
