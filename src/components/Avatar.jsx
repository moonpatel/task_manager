import React, { useContext } from 'react'
import AuthContext from '../context/auth-context';

const Avatar = ({ width }) => {
    const { displayName: name } = useContext(AuthContext).user;
    const w = `w-[${width}px]`;
    const h = `h-[${width}px]`;
    console.log(Math.floor(parseInt(width)/1.5))
    const text = `text-[${parseInt(width)/2}px]`;
    return (
        <div className={`flex justify-center items-center rounded-full gradient-3 dark:gradient-2 select-none ${w} ${h}`}>
            <span className={`${text} mb-1`}>{name.at(0).toUpperCase()}</span>
        </div>
    )
}

export default Avatar