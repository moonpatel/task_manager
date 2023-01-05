import React, { useContext } from 'react'
import TaskSection from '../components/Tasks/TaskSection'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { ReactComponent as BellIcon } from '../assets/svg/bell.svg'
import ThemeContext from '../context/theme-context'
    
const MainSection = () => {
    const themeCtx = useContext(ThemeContext);
    return (
        <div className="w-4/5 h-screen px-10 dark:bg-dark-background">
            {/* <!-- navbar --> */}
            <nav className="flex align-middle my-10 space-x-3 dark:bg-dark-background">
                {/* <!-- search icon --> */}
                <div className="flex my-auto rounded-xl bg-gray-50 w-2/3 dark:bg-dark-bg-1 dark:text-dark-on-background/75">
                    <MagnifyingGlassIcon className="w-6 mx-2 my-auto bg-transparent stroke-gray-400 dark:stroke-gray-500"/>
                    <input
                        className="my-auto w-full h-10 rounded-xl bg-inherit focus:outline-none dark:placeholder:text-dark-on-background/20 peer dark:caret-dark-bg-5"
                        type="text"
                        placeholder="Search"
                    />
                </div>
                <div className="flex justify-end w-1/3 space-x-3">
                    <BellIcon className='w-6 dark:stroke-gray-500' onClick={() => themeCtx.toggleTheme()} />

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