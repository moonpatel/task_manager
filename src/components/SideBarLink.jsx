import React from 'react'
import { NavLink } from 'react-router-dom'

const SideBarLink = ({ icon, label, to }) => {
    const activeStyle = "w-full h-full flex pl-10 bg-green-100 dark:bg-dark-primary-900 dark:text-dark-on-primary";
    const inActiveStyle = "w-full h-full flex pl-10 hover:bg-gray-200 dark:hover:bg-white/10 dark:hover:text-dark-primary-900 dark:text-white/50";
    return (
        <li className={`h-12`}>
            <NavLink to={to} className={({ isActive }) => isActive ? activeStyle : inActiveStyle}>
                <span className='my-auto'>
                    {icon}
                </span>
                <span className='my-auto mx-3'>{label}</span>
            </NavLink>
        </li>
    )
}

export default SideBarLink

// import React from 'react'

// const Option = (props) => {
//     return (
//         <li className={`flex space-x-3 px-10 py-3 cursor-pointer ${props.active ? "bg-green-100 border-r-4 border-r-green-800 dark:border-r-green-200 dark:bg-green-700 dark:text-white" : "hover:bg-gray-200 dark:hover:bg-gray-800 dark:bg-dark-gray dark:text-gray-500"}`} onClick={props.onClick}>
//             {props.icon}
//             <span>{props.label}</span>
//         </li>
//     )
// }

// export default Option