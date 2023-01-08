import React from 'react'

const Profile = () => {
    return (
        <div className='mx-auto mt-10 w-[720px] space-y-10'>
            <div className='flex items-center space-x-5'>
                <img className='w-[100px] rounded-full' src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/240px-Circle-icons-profile.svg.png" />
                <div className='flex-1'>
                    <div className='text-3xl font-semibold'>Name</div>
                    <div className=' text-black/50 dark:text-dark-on-background/50'>username</div>
                </div>
                <button className='dark:bg-dark-primary-900 p-2 rounded-lg px-3 font-semibold dark:text-dark-background'>Edit Profile</button>
            </div>
            <div>
                <h1 className='text-2xl font-semibold my-2'>About</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias maiores eum ipsum harum aperiam rem earum ad similique hic, quam reiciendis amet? Eveniet sit tenetur laborum rem quaerat quis delectus.</p>
            </div>
            {/* <div className=''>
                <h1 className='text-2xl font-semibold my-2'>Joined teams</h1>
                <div>No teams joined</div>
            </div> */}
        </div>
    )
}

export default Profile