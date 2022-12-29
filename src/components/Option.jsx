import React from 'react'

const Option = (props) => {
    return (
        <li className={`flex space-x-3 px-10 py-3 cursor-pointer ${props.active?"bg-green-100 border-r-4 border-r-green-800":""}`} onClick={props.onClick}>
            {props.icon}
            <span>{props.label}</span>
        </li>
    )
}

export default Option