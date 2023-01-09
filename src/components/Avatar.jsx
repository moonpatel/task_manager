import React, { useContext } from 'react'
import AuthContext from '../context/auth-context';

const Avatar = ({ width }) => {
    const { displayName: name } = useContext(AuthContext).user;
    return (
        <div style={{ width: `${width}px`, height: `${width}px` }} className="flex justify-center items-center rounded-full gradient-3 dark:gradient-2 select-none">
            <span style={{ fontSize: `${parseInt(width) / 2}px` }} className="mb-1">{name.at(0).toUpperCase()}</span>
        </div>
    )
}

export default Avatar