import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthContext from '../context/auth-context'

const Logout = () => {
    const authCtx = useContext(AuthContext);

    return (
        <div className='text-center rounded-2xl bg-red-50 mt-[50%] p-2 py-3 dark:bg-white/75 backdrop-blur-md'>
            {/* <ExclamationCircleIcon className='w-20 mx-auto dark:stroke-dark-error' /> */}
            <p className='dark:text-dark-background text-lg py-1'>Are you sure you want to logout?</p>
            <div className='my-3 space-x-3'>
                <button className='text-white p-2 rounded-lg dark:text-black bg-black dark:bg-transparent border-black border'>Cancel</button>
                <button className='text-white p-2 rounded-lg bg-red-500 dark:text-dark-on-error' onClick={authCtx.logout}>Logout</button>
            </div>
        </div>
    )
}

export default Logout