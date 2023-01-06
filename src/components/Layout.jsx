import React, { Children } from 'react'
import Navbar from './Navbar'
import SideBar from './SideBar'

const Layout = ({ content, children }) => {
    return (
        <React.Fragment>
            <SideBar />
            <div className='flex flex-col w-4/5 text-dark-bg-2'>
                <Navbar />
                <div className='h-[10vh] min-h-[80px]'></div>
            {children || content}
            </div>
        </React.Fragment>
    )
}

export default Layout