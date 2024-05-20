import axios from 'axios'
import React, { useEffect, useState } from 'react'

function RndmJokes() {
    const [rndmJokes, setRndmJokes] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [count, setCount] = useState(1)
    useEffect(() => {
        const jokesGenerator = async () => {
            try {
                const res = await axios.get(`http://localhost:8080/api/v1/public/randomjokes/joke/random`)
                let fetchedData = res.data || []
                // console.log('fetchedData :: ', fetchedData);
                setRndmJokes(fetchedData)
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
            <section className="py-10 ">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
                    {loading && <p>Jokes Loading...</p>}
                    {error && <p>Jokes Created Error:: {error.message}</p>}
                    {rndmJokes.success == true && (
                        <div
                            className="mx-auto w-full text-center md:max-w-2xl">
                            <h2
                                className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl underline">
                                Your JoKe Is
                            </h2>
                            <ul>
                                {
                                    <li key={rndmJokes.data.id}
                                        className=" text-2xl mx-auto mt-4 max-w-xl leading-relaxed text-gray-600 border border-black p-5 rounded "
                                    >
                                        {rndmJokes.data.content}</li>
                                }
                            </ul>
                            <button
                                type="button"
                                className="mt-4 rounded-md bg-black px-3 py-3 text-xl font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                onClick={() => setCount(e => e + 1)}
                            >Change Joke
                            </button>
                        </div>
                    )}
                </div>
            </section>




        </>
    )
}

export default RndmJokes