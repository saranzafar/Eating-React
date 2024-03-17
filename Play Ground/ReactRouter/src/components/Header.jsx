import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Header() {
    return (
        <header className='shadow sticky z-50 top-0'>
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        {/* <img src="https://saranzafar.github.io/img/project-1.jpg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" /> */}
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">SaranDev</span>
                    </Link>
                    <div className="flex items-center lg:order-2">
                        <Link to="#" className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Log in</Link>
                        <Link to="#" className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">Get started</Link>
                    </div>

                    <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink to="/" className={({ isActive }) => `block py-2 pr-4 pl-3 text-white rounded ${isActive ? "bg-primary-700 lg:bg-transparent lg:text-primary-700" : "text-secondary-700"}  lg:p-0 dark:text-white`} aria-current="page">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about" className={({ isActive }) => `block py-2 pr-4 pl-3 text-white rounded ${isActive ? "bg-primary-700 lg:bg-transparent lg:text-primary-700" : " text-secondary-700"}  lg:p-0 dark:text-white`} aria-current="page">About</NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact" className={({ isActive }) => `block py-2 pr-4 pl-3 text-white rounded ${isActive ? "bg-primary-700 lg:bg-transparent lg:text-primary-700" : " text-secondary-700"}  lg:p-0 dark:text-white`} aria-current="page">Contact Us</NavLink>
                            </li>
                            <li>
                                <NavLink to="/github" className={({ isActive }) => `block py-2 pr-4 pl-3 text-white rounded ${isActive ? "bg-primary-700 lg:bg-transparent lg:text-primary-700" : " text-secondary-700"}  lg:p-0 dark:text-white`} aria-current="page">GitHub</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header