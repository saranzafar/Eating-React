import React, { useEffect, useState } from 'react'
import axios from 'axios'

function RndmQuotes() {
    const [quotes, setQuotes] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    const [count, setCount] = useState(1)

    useEffect(() => {
        const rndmQuotes = async () => {
            try {
                const res = await axios.get('http://localhost:8080/api/v1/public/quotes/quote/random')
                let fetchedQuote = res.data || []
                setQuotes(fetchedQuote)
                console.log(fetchedQuote);
            } catch (error) {
                setError(error)
            }
            finally {
                setLoading(false)
            }
        }
        rndmQuotes()
    }, [count])

    return (
        <>
            <section
                className="py-10 bg-cover bg-no-repeat rounded-2xl bg-center"
                style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1492052722242-2554d0e99e3a?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
                    height: '400px'
                }}
            >
                <div className=" d-flex px-4 sm:px-6 lg:px-8 ">
                    {loading && <p>Jokes Loading...</p>}
                    {error && <p>Jokes Created Error:: {error.message}</p>}


                    {quotes.success == true && (
                        <div
                            className="mx-auto w-full text-center md:max-w-2xl">
                            <h2
                                className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl underline">
                                Quote
                            </h2>
                            <ul>
                                {
                                    <li key={quotes.data.id}
                                        className=" text-2xl mx-auto mt-4 max-w-xl leading-relaxed text-white border border-black p-5 rounded "
                                    >
                                        {quotes.data.content}</li>
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

export default RndmQuotes