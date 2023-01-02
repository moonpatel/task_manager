import React from 'react'
import { NavLink } from 'react-router-dom'

const SideBarLink = ({ icon, label, to }) => {
    const activeStyle = "w-full h-full my-0 flex space-x-3 pl-10 bg-green-100 border-r-4 border-r-green-800 dark:border-r-green-200 dark:bg-green-700 dark:text-white";
    const inActiveStyle = "w-full h-full my-0 flex space-x-3 pl-10 hover:bg-gray-200 dark:hover:bg-gray-800 dark:bg-dark-gray dark:text-gray-500";
    return (
        <li className={`h-12`}>
            <NavLink to={to} className={({ isActive }) => isActive ? activeStyle : inActiveStyle}>
                <span className='my-auto'>
                    {icon}
                </span>
                <span className='my-auto'>{label}</span>
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