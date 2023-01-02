import React, { Children } from 'react'
import SideBar from './SideBar'

const Layout = ({content, children }) => {
    return (
        <React.Fragment>
            <SideBar />
            {children || content}
        </React.Fragment>
    )
}

export default Layout