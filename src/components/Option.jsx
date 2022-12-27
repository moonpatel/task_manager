import React from 'react'

const Option = (props) => {
    return (
        <li className={`flex space-x-3 px-10 py-3 ${props.active?"bg-green-50 border-r-4 border-r-green-800":""}`}>
            {props.icon}
            <span>{props.label}</span>
        </li>
    )
}

export default Option