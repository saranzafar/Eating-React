import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {jsx from 'react/jsx-runtime.js'}
// 1.
// function MyApp() {
//   return (
//     <div>
//       <h1>Hi this is MyApp</h1>
//     </div>
//   )
// }
// 2.
// const reactElement = {
//   type: 'a',
//   props: {
//     href: 'https://google.com',
//     target: '_blank',
//   },
//   children: 'Click me to visit Google'
// };
// 3. 
// const anotherElement = (
//   <a href="google.com" target='_blank'>Visit Google</a>
// )
// // 4.
const anotherVariable = "this is another variable"
const reactElement = React.createElement(//babble inject this code into  the HTML)
  'a',
  { href: 'https://google.com', target: '_blank' },//it is importent
  'click me to visit google',
  anotherVariable
)

ReactDOM.createRoot(document.getElementById('root')).render(
  // <App />
  // 1.
  // <MyApp />
  // {/*  MyApp() */}
  // 2. 
  // {/* reactElement */}
  // 3.
  // anotherElement
  // 4.
  reactElement

)
