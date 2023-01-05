import React, { useContext } from 'react';
import SideBarLink from './SideBarLink';

import { ReactComponent as HomeIcon } from '../assets/svg/home.svg';
import { ReactComponent as StatsIcon } from '../assets/svg/stats.svg';
import { ReactComponent as MsgBubbleIcon } from '../assets/svg/msg_bubble.svg';
import { ReactComponent as FolderIcon } from '../assets/svg/folder.svg';
import { ReactComponent as CalendarIcon } from '../assets/svg/calendar.svg';
import { ReactComponent as SettingsIcon } from '../assets/svg/settings.svg';
import { ReactComponent as LogoutIcon } from '../assets/svg/logout.svg';
import AuthContext from '../context/auth-context';

const SideBar = () => {
    const authCtx = useContext(AuthContext);
    return (
        <React.Fragment>
            <div className="fixed w-1/5 h-screen py-5 dark:bg-dark-bgsec">
                <h1 className="my-10 px-10 text-lg font-semibold dark:text-white">Task Manager</h1>
                <ul className="my-12 text-gray-500 dark:text-white text-opacity-50">

                    <SideBarLink to={'/home'} icon={<HomeIcon />} label="Overview" />
                    <SideBarLink to={'/stats'} icon={<StatsIcon />} label="Stats" />
                    <SideBarLink to={'/projects'} icon={<FolderIcon />} label="Projects" />
                    <SideBarLink to={'/chat'} icon={<MsgBubbleIcon />} label="Chat" />
                    <SideBarLink to={'/calendar'} icon={<CalendarIcon />} label="Calendar" />

                    <li className="my-48"></li>

                    <SideBarLink to={'/settings'} icon={<SettingsIcon />} label="Settings" />
                    <SideBarLink to={'/logout'} icon={<LogoutIcon />} onClick={authCtx.logout} label="Logout" />
                </ul>
            </div>
            <div className="w-1/5 h-screen"></div>
        </React.Fragment>
    )
}

export default SideBar