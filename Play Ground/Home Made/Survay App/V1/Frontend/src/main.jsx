import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'flowbite';
import { Provider } from 'react-redux';
import store from './store/store.js';

import { Route, createBrowserRouter, RouterProvider, createRoutesFromElements } from 'react-router-dom';
import { Signup,PageNotFound } from "./pages";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='/' element={<Signup />} />
      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
