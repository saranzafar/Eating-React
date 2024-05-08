import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'flowbite';
import { Provider } from 'react-redux';
import store from './store/store.js';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Signup, PageNotFound, Login, LandingPage, HomePage } from "./pages";
import AuthLayout from './components/auth/AuthLayout.jsx';

import Card from './components/common/Card.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <LandingPage />
        ),
      },
      {
        path: "/card",
        element: (
          <AuthLayout>
            <Card />
          </AuthLayout>
        ),
      },
      {
        path: '/login',
        element: (
          <Login />
        )
      },
      {
        path: "/signup",
        element: (
          <Signup />
        ),
      },
      {
        path: "/home",
        element: (
          <AuthLayout >
            <HomePage />
          </AuthLayout>
        ),
      },
      {
        path: "*",
        element: (
          <PageNotFound />
        ),
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
