import React from 'react'
import { useLoaderData } from 'react-router-dom'

function GitHub() {
    const data = useLoaderData()
    return (
        <>
            <section>
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                        <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
                            <a href="#" className="group relative block bg-black">
                                <img
                                    alt=""
                                    src={data.avatar_url}
                                    className="absolute inset-0 h-full w-full object-cover object-top opacity-75 transition-opacity group-hover:opacity-50"
                                />
                                <div className="relative p-4 sm:p-6 lg:p-8">
                                    <p className="text-sm font-medium uppercase tracking-widest text-primary-700">{data.bio}</p>
                                    <p className="text-xl font-bold text-white sm:text-2xl">{data.name}</p>
                                    <div className="mt-32 sm:mt-48 lg:mt-64">
                                        <div
                                            className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                                        >
                                            <p className="text-sm text-white">Followers: {data.followers}</p>
                                            <p className="text-sm text-white">Repositories: {data.public_repos}</p>
                                            <p className="text-sm text-white">Location: {data.location}</p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="lg:py-24">
                            <h2 className="text-3xl font-bold sm:text-4xl">My Github Account</h2>
                            <p className="mt-4 text-gray-600">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic atque tenetur quis
                                eius quos ea neque sunt, accusantium soluta minus veniam tempora deserunt? Molestiae eius
                                quidem quam repellat.
                            </p>
                            <a
                                href="#"
                                className="mt-8 inline-block rounded bg-primary-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-primary-700 focus:outline-none focus:ring focus:ring-primary-400"
                            >
                                Get Started Today
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default GitHub

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/saranzafar')
    return response.json()
}

