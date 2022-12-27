import React from 'react';
import Option from './Option';

import { ReactComponent as HomeIcon } from '../assets/svg/home.svg';
import { ReactComponent as StatsIcon } from '../assets/svg/stats.svg';
import { ReactComponent as MsgBubbleIcon } from '../assets/svg/msg_bubble.svg';
import { ReactComponent as FolderIcon } from '../assets/svg/folder.svg';
import { ReactComponent as CalendarIcon } from '../assets/svg/calendar.svg';
import { ReactComponent as SettingsIcon } from '../assets/svg/settings.svg';
import { ReactComponent as LogoutIcon } from '../assets/svg/logout.svg';

const SideBar = () => {
    return (
        <React.Fragment>
            <div className="fixed w-1/5 h-screen py-5 border-r-2 border-gray-100">
                <h1 className="my-10 px-10 text-lg font-semibold">Task Manager</h1>
                <ul className="my-12 text-gray-500">

                    <Option icon={<HomeIcon />} label="Overview" />
                    <Option icon={<StatsIcon />} label="Stats" />
                    <Option icon={<FolderIcon />} label="Projects" active={true} />
                    <Option icon={<MsgBubbleIcon />} label="Chat" />
                    <Option icon={<CalendarIcon />} label="Calendar" />

                    <li className="my-48"></li>

                    <Option icon={<SettingsIcon />} label="Settings" />
                    <Option icon={<LogoutIcon />} label="Logout" />
                </ul>
            </div>
            <div className="w-1/5 h-screen"></div>
        </React.Fragment>
    )
}

export default SideBar