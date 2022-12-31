import React from 'react'
import TaskSection from './Tasks/TaskSection'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { ReactComponent as BellIcon } from '../assets/svg/bell.svg'
import { toggleTheme } from '../utilities/setTheme'

const MainSection = () => {
    return (
        <div className="w-4/5 h-screen px-10 dark:bg-dark-gray">
            {/* <!-- navbar --> */}
            <nav className="flex align-middle my-10 space-x-3">
                {/* <!-- search icon --> */}
                <div className="flex my-auto rounded-xl bg-gray-50 w-2/3 dark:bg-gray-800">
                    <MagnifyingGlassIcon className="w-6 mx-2 my-auto stroke-gray-400 dark:stroke-gray-500" />
                    <input
                        className="my-auto w-full h-10 rounded-xl bg-gray-50 focus:outline-none dark:bg-gray-800 dark:placeholder:text-gray-500 dark:caret-gray-500"
                        type="text"
                        placeholder="Search"
                    />
                </div>
                <div className="flex justify-end w-1/3 space-x-3">
                    <BellIcon className='w-6 dark:stroke-gray-500' />

                    <div className="my-auto font-semibold px-5 dark:text-gray-500">{localStorage.getItem('email')}</div>
                    <div className="mr-6 relative">
                        <img className="h-12 rounded-full inline-block mr-6" src="../../assets/images/user.png" alt="" />
                    </div>
                </div>
            </nav>

            {/* <!-- main content --> */}
            <main>
                <div className="flex justify-between mb-7">
                    <h1 className="my-auto text-2xl font-semibold dark:text-gray-500">Projects</h1>
                    <h2 className="my-auto text-lg text-gray-800 dark:text-gray-500">This Week</h2>
                </div>

                <TaskSection />
            </main>
        </div>
    )
}

export default MainSection