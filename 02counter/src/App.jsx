import { useState } from 'react'//hooks come from here
import './App.css';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15)
  // let counter = 5;

  const addValue = () => {
    // counter = counter + 1;
    // counter = counter + 1;
    // counter = counter + 1; //just increase the number by one each time we click on this button 
    setCounter((prevCount) => prevCount + 1); //this is a way to update state using a function that takes in the previous value and returns an
    setCounter((prevCount) => prevCount + 1); //this is a more modern way of doing it using hooks
    counter = counter + 1;
    if (counter <= 20) {
      setCounter(counter)
    }
  }
  const removeValue = () => {
    if (counter >= 1) {
      setCounter(counter - 1)
    }
  }

  return (
    <>
      <h1>Chay or React</h1>
      <h1>Counter: {counter}</h1>
      <br />
      <button onClick={addValue}>Add Value {counter} </button>
      <button onClick={removeValue}>Minus Value {counter} </button>
      <p>Footer: {counter}</p>
    </>
  )
}

export default App
