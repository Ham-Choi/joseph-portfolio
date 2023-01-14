import React from 'react';

function Navigator() {
   return (
    <nav className="bg-white px-2 sm:px-4 py-2.5 dark:bg-stone-900 fixed w-full z-20 top-0 left-0 dark:border-gray-600">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
            <div className="flex md:order-1">
                <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                    <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                </button>
            </div>
            <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-2" id="navbar-sticky">
                <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-stone-900">
                <li>
                    <a href="#" className="block py-2 pl-3 pr-4 text-gray bg-transparent rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-70" aria-current="page">Home</a>
                </li>
                <li>
                    <a href="#" className="block py-2 pl-3 pr-4 text-gray bg-transparent dark:bg-transparent rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
                </li>
                </ul>
            </div>
        </div>
</nav>
   )
}

export default Navigator;