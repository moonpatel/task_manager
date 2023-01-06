import React, { Children } from 'react'
import Navbar from './Navbar'
import SideBar from './SideBar'

const Layout = ({ content, children }) => {
    return (
        <React.Fragment>
            <SideBar />
            <div className='flex flex-col w-4/5'>
                <Navbar />
            {children || content}
            </div>
        </React.Fragment>
    )
}

export default Layout