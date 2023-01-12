import React, { useContext } from 'react';
import SideBarLink from './SideBarLink';
import AuthContext from '../context/auth-context';
import { HomeIcon, ChatBubbleLeftIcon as MsgBubbleIcon, ChartBarIcon as StatsIcon, FolderOpenIcon as FolderIcon, CalendarIcon, Cog6ToothIcon as SettingsIcon, ArrowRightOnRectangleIcon as LogoutIcon } from '@heroicons/react/24/outline'

const SideBar = () => {
    const authCtx = useContext(AuthContext);
    return (
        <React.Fragment>
            <div className="fixed w-1/5 h-screen py-5 bg-dark-primary-900 dark:bg-dark-bgsec">
                <h1 className="my-10 px-10 text-lg font-semibold dark:text-white">Task Manager</h1>
                <ul className="my-12 dark:text-white text-opacity-50">

                    <SideBarLink to={'/home'} icon={<HomeIcon className='w-5' />} label="Overview" />
                    <SideBarLink to={'/stats'} icon={<StatsIcon className='w-5' />} label="Stats" />
                    <SideBarLink to={'/projects'} icon={<FolderIcon className='w-5' />} label="Projects" />
                    <SideBarLink to={'/chat'} icon={<MsgBubbleIcon className='w-5' />} label="Chat" />
                    <SideBarLink to={'/calendar'} icon={<CalendarIcon className='w-5' />} label="Calendar" />

                    <li className="my-48"></li>

                    <SideBarLink to={'/settings'} icon={<SettingsIcon className='w-5' />} label="Settings" />
                    <SideBarLink to={'/logout'} icon={<LogoutIcon className='w-5' />} onClick={authCtx.logout} label="Logout" />
                </ul>
            </div>
            <div className="w-1/5 h-screen"></div>
        </React.Fragment>
    )
}

export default SideBar