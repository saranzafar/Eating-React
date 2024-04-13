import React, { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    axios.get('/api/jokes')
      .then((response) => {
        setJokes(response.data)
        console.log("response = ", response);
        console.log("response.data = ", response.data);
      })
      .catch((err) => {
        console.log('error while making request :: ', err);
      })
  }, [])

  return (
    <>
      <h2>Frontend app</h2>
      <p>Jokes: {jokes.length}</p>
      {
        jokes.map((joke) => (
          <ul key={joke.id}>
            <h4 >{joke.title}</h4>
            <p >{joke.content}</p>
          </ul>
        ))
      }
    </>

  )
}

export default App