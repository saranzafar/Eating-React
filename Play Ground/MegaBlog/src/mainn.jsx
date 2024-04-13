// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'

// import { Provider } from 'react-redux'
// import store from './store/store.js'
// import { RouterProvider, createBrowserRouter } from 'react-router-dom'
// import Protected from './components/AuthLayout.jsx'
// import { Login, Home, Signup, AllPosts, AddPost, EditPost, Post } from './pages'
// import Test from './Test.jsx'


// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     children: [
//       {
//         path: '/login',
//         element: <Test />,
//       },
//       {
//         path: '/loginn',
//         element: (
//           <Login />
//         ),
//       },
//       {
//         path: '/signup',
//         element: (
//           <Signup />
//         ),
//       }
//     ]
//   }




//   // {
//   //   path: '/',
//   //   element: <App />,
//   //   children: [
//   //     {
//   //       path: '/',
//   //       element: <Home />,
//   //     },
//   //     {
//   //       path: '/login',
//   //       element: (
//   //         <Protected authentication={false}>
//   //           {/* <Login /> */}
//   //           <Test />
//   //         </Protected>
//   //       ),
//   //     },
//   //     {
//   //       path: '/signup',
//   //       element: (
//   //         <Protected authentication={false}>
//   //           <Signup />
//   //         </Protected>
//   //       ),
//   //     },
//   //     {
//   //       path: '/all-post',
//   //       element: (
//   //         <Protected authentication>
//   //           {""}
//   //           <AllPosts />
//   //         </Protected>
//   //       ),
//   //     },
//   //     {
//   //       path: '/add-post',
//   //       element: (
//   //         <Protected authentication>
//   //           {""}
//   //           <AddPost />
//   //         </Protected>
//   //       ),
//   //     },
//   //     {
//   //       path: '/edit-post:slug',
//   //       element: (
//   //         <Protected authentication>
//   //           {""}
//   //           <EditPost />
//   //         </Protected>
//   //       ),
//   //     },
//   //     {
//   //       path: '/post/:slug',
//   //       element: <Post />
//   //     },
//   //   ]
//   // }
// ])

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <RouterProvider router={router} />
//     </Provider>
//   </React.StrictMode>,
// )


