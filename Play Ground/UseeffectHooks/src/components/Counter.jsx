import React, { useState } from 'react'

function Counter({ initialValue }) {
    const [count, setCount] = useState(initialValue)
    return (
        <div
            class="mx-auto max-w-7xl px-2 py-10 lg:px-0">
            <div
                class="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                <div
                    class="mt-10 w-full md:w-1/2 lg:mt-0">
                    <form
                        class="flex lg:justify-center">
                        <div
                            class="flex w-full max-w-md items-center space-x-2">
                            <div
                                class="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                type="text"
                            >
                                {count}
                            </div>


                            <button
                                type="button"
                                class="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                onClick={() => setCount(e => e + 1)}
                            >
                                Subscribe
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default Counter