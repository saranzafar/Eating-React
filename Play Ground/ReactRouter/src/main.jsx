import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


import Layout from './Layout.jsx'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import { About, Contact, ErrorPage, Gallery, GitHub, Home, Portfolio, githubInfoLoader } from './components/index.js'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route index path="/about/gallery" element={<Gallery />} />
      <Route path="/contact" element={<Contact />} />
      <Route loader={githubInfoLoader} path="/github" element={<GitHub />} />
      <Route path="/portfolio/:userid" element={<Portfolio />} />
      <Route path="*" element={<ErrorPage />} /> {/* Catch-all route */}
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
