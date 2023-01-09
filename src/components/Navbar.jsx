import React, { useContext, useState } from 'react'
import ThemeContext from '../context/theme-context'
import { NavLink } from 'react-router-dom'
import DropDown from './UI/DropDown'
import { MagnifyingGlassIcon, BellIcon, UserCircleIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/outline'
import Avatar from './Avatar'

const Navbar = () => {
    const themeCtx = useContext(ThemeContext);
    const [open, setOpen] = useState(false);

    return (
        <nav className="flex h-[10vh] min-h-[80px] px-12 space-x-3 w-4/5 border-b dark:border-b-dark-bg-3 dark:bg-dark-background fixed bg-white opacity-100 z-10 top-0">
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
                <div className="mr-6 my-auto relative" onClick={() => setOpen(!open)}>
                    <Avatar width="50" />
                    <DropDown open={open}>
                        <NavLink to={"/profile"} className="flex my-2 space-x-4 hover:text-dark-primary-900 group">
                            <UserCircleIcon className='w-6 group-hover:stroke-dark-primary-900' />
                            <div className='my-auto'>My Profile</div>
                        </NavLink>
                        <NavLink to={"/help"} className="flex my-2 space-x-4 hover:text-dark-primary-900">
                            <QuestionMarkCircleIcon className='w-6' />
                            <div className='my-auto'>Help & Support</div>
                        </NavLink>
                        <NavLink to={"/invite"} className="flex my-2 space-x-4 hover:text-dark-primary-900">
                            <UserCircleIcon className='w-6' />
                            <div className='my-auto'>Invite Friends</div>
                        </NavLink>
                        <NavLink to={"/logout"} className="flex my-2 space-x-4 hover:text-dark-primary-900">
                            <UserCircleIcon className='w-6' />
                            <div className='my-auto'>Logout</div>
                        </NavLink>
                    </DropDown>
                </div>
            </div>
        </nav>
    )
}

export default Navbar