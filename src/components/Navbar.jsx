import React, { useContext } from 'react'
import AuthContext from '../context/auth-context'
import { MagnifyingGlassIcon, BellIcon } from '@heroicons/react/24/outline'

const Navbar = () => {
    const themeCtx = useContext(AuthContext)

    return (
        <nav className="flex h-[10vh] min-h-[80px] px-12 space-x-3 w-4/5 border-b dark:bg-dark-background fixed bg-white top-0 z-30">
            {/* <!-- search icon --> */}
            <div className="flex my-auto rounded-xl bg-gray-50 w-2/3 dark:bg-dark-bg-1 dark:text-dark-on-background/75">
                <MagnifyingGlassIcon className="w-6 mx-2 my-auto bg-transparent stroke-gray-400 dark:stroke-gray-500" />
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
    )
}

export default Navbar