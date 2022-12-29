import React from 'react'
import TaskGroup from './Tasks/TaskGroup'

import { ReactComponent as SearchIcon } from '../assets/svg/search.svg'
import { ReactComponent as BellIcon } from '../assets/svg/bell.svg'
import TaskSection from './Tasks/TaskSection'

const MainSection = () => {
    return (
        <div className="w-4/5 h-screen px-10">
            {/* <!-- navbar --> */}
            <nav className="flex align-middle my-10 space-x-3">
                {/* <!-- search icon --> */}
                <div className="flex my-auto rounded-xl bg-gray-50 w-2/3">
                    <SearchIcon />
                    <input
                        className="my-auto w-full h-10 rounded-xl bg-gray-50 focus:outline-none"
                        type="text"
                        placeholder="Search"
                    />
                </div>
                <div className="flex justify-end w-1/3 space-x-3">
                    <BellIcon />

                    <div className="my-auto font-semibold px-5">{localStorage.getItem('email')}</div>
                    <div className="mr-6 relative">
                        <img className="h-12 rounded-full inline-block mr-6" src="../../assets/images/user.png" alt="" />
                    </div>
                </div>
            </nav>

            {/* <!-- main content --> */}
            <main>
                <div className="flex justify-between mb-7">
                    <h1 className="my-auto text-2xl font-semibold">Projects</h1>
                    <h2 className="my-auto text-lg text-gray-800">This Week</h2>
                </div>

                <TaskSection />
            </main>
        </div>
    )
}

export default MainSection