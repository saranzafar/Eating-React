import axios from 'axios'
import React, { useEffect, useState } from 'react'

function CountJokes() {
    const [jokes, setJokes] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [count, setCount] = useState(1)
    useEffect(() => {
        const jokesGenerator = async () => {
            try {
                const res = await axios.get(`http://localhost:8080/api/v1/public/randomjokes?limit=10&query=science&inc=categories%2Cid%2Ccontent&page=${count}`)
                let fetchedData = res.data.data.data || []
                console.log('fetchedData :: ', fetchedData);
                setJokes(fetchedData)
            } catch (error) {
                setError(error)
            }
            finally {
                setLoading(false)
            }
        }
        jokesGenerator()
    }, [count])

    return (
        <>
            {loading && <p>Jokes Loading...</p>}
            {error && <p>Jokes Created Error:: {error.message}</p>}
            {jokes.length > 0 && (
                <div>
                    <h2>Dish is Ready</h2>
                    <ul>
                        {jokes.map((joke) => (
                            < li key={joke.id} > Joke: {joke.content}</li>
                        ))}
                    </ul>
                </div >
            )
            }
            <button onClick={() => setCount(e => e + 1)} >Change Joke {count}</button>
        </>
    )
}
export default CountJokes