import React, { useContext } from 'react'
import Avatar from '../components/Avatar';
import AuthContext from '../context/auth-context'

const Profile = () => {
    const { displayName, email } = useContext(AuthContext).user;
    return (
        <div className='mx-auto mt-10 w-[720px] space-y-10'>
            <div className='flex items-center space-x-5'>
                <Avatar name={displayName} width="100" />
                <div className='flex-1'>
                    <div className='text-3xl font-semibold'>{displayName}</div>
                    <div className=' text-black/50 dark:text-dark-on-background/50'>{email}</div>
                </div>
                <button className='dark:gradient-3 p-2 rounded-lg px-3 font-semibold dark:text-dark-background'>Edit Profile</button>
            </div>
            <div>
                <h1 className='text-2xl font-semibold my-2'>About</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias maiores eum ipsum harum aperiam rem earum ad similique hic, quam reiciendis amet? Eveniet sit tenetur laborum rem quaerat quis delectus.</p>
            </div>
            <div className=''>
                <h1 className='text-2xl font-semibold my-2'>Joined teams</h1>
                <div>No teams joined</div>
            </div>
        </div>
    )
}

export default Profile