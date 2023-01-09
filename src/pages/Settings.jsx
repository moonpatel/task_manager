import React from 'react'
import Avatar from '../components/Avatar'

const Settings = () => {
    return (
        <div className='grid grid-cols-3'>
            <div className='col-span-1 p-5 pl-20 font-semibold'>
                <header className='my-4'>
                    <h1 className='text-xl text-black dark:text-dark-on-background'>Settings</h1>
                    <span className='text-sm text-dark-bg-5 dark:text-dark-bg-7'>You can find all settings here.</span>
                </header>
                <ul className='text-dark-bg-9 space-y-3 pl-1'>
                    <li className='bg-gray-200 dark:bg-dark-bg-3 text-dark-bg-3 dark:text-gray-300 p-2 rounded-lg'>General Settings</li>
                    <li className='hover:bg-gray-200 hover:dark:bg-dark-bg-3 rounded-lg p-2'>Password Settings</li>
                    <li className='hover:bg-gray-200 hover:dark:bg-dark-bg-3 rounded-lg p-2'>Notification Settings</li>
                    <li className='hover:bg-gray-200 hover:dark:bg-dark-bg-3 rounded-lg p-2'>Plan & Billings</li>
                    <li className='hover:bg-gray-200 hover:dark:bg-dark-bg-3 rounded-lg p-2'>Integrations</li>
                    <li className='hover:bg-gray-200 hover:dark:bg-dark-bg-3 rounded-lg p-2'>Deactivation</li>
                </ul>
            </div>
            <div className='col-span-2 flex flex-col'>
                <div className='border-2 m-5 mr-16 p-2 px-5 rounded-lg border-gray-300 dark:border-dark-bg-4'>
                    <h1 className='text-lg font-semibold border-b my-2 pb-2 border-b-dark-bg-5'>Personal Details</h1>
                    <div className='flex space-x-10 items-center my-4'>
                        <Avatar width="100" />
                        <button className='rounded-lg p-2 bg-dark-primary-900 text-white font-semibold gradient-3'>Upload Profile Image</button>
                    </div>
                    <div className='flex space-x-16 my-5'>
                        <div>
                            <label className='font-semibold ml-3' htmlFor="">Name</label>
                            <br />
                            <input type="text" className='p-2 px-3 my-1 outline-none bg-gray-300/75 rounded-lg text-dark-background dark:text-white dark:bg-dark-bg-2' />
                        </div>
                        <div>
                            <label className='font-semibold ml-3' htmlFor="">Username</label>
                            <br />
                            <input type="text" className='p-2 px-3 my-1 outline-none bg-gray-300/75 rounded-lg text-dark-background dark:text-white dark:bg-dark-bg-2' />
                        </div>
                    </div>
                    <div className='bg-gray-200 rounded-md p-1 px-3 dark:bg-dark-bg-6'>
                        Note: You can change username once in 24 days. Check it before changing.
                    </div>
                    <button className='bg-black text-white p-2 rounded-md my-3 dark:gradient-3'>Save changes</button>
                </div>
                <div>
                    <div className='border-2 m-5 mr-16 p-2 px-5 rounded-lg border-gray-300 dark:border-dark-bg-4'>
                        <h1 className='text-lg font-semibold border-b my-2 pb-2 border-b-dark-bg-5'>Personal Details</h1>
                        <div className='flex space-x-10 items-center my-4'>
                            <Avatar width="100" />
                            <button className='rounded-lg p-2 bg-dark-primary-900 text-white font-semibold gradient-3'>Upload Profile Image</button>
                        </div>
                        <div className='flex flex-col my-5'>
                            <div>
                                <label className='font-semibold ml-3' htmlFor="">Email Address</label>
                                <br />
                                <input type="text" className='p-2 px-3 my-1 outline-none bg-gray-300/75 rounded-lg text-dark-background dark:text-white dark:bg-dark-bg-2' />
                            </div>
                            <div className='bg-gray-200 rounded-md p-1 px-3 my-2 dark:bg-dark-bg-6'>
                                Note: You will get confirmation email within 30 min.
                            </div>
                            <div>
                                <label className='font-semibold ml-3' htmlFor="">Phone Number</label>
                                <br />
                                <input type="text" className='p-2 px-3 my-1 outline-none bg-gray-300/75 rounded-lg text-dark-background dark:text-white dark:bg-dark-bg-2' />
                            </div>
                            <div className='bg-gray-200 rounded-md p-1 px-3 my-2 dark:bg-dark-bg-6'>
                                Note: You will get OTP within 30 mins.
                            </div>
                        </div>
                        <button className='bg-black text-white p-2 rounded-md my-3 dark:gradient-3'>Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Settings