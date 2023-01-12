import React from 'react'
import { Link } from 'react-router-dom'

const Project = ({ project }) => {
    return (
        <div className='p-3 w-32 rounded-lg text-white bg-dark-background dark:bg-dark-bg-2 pb-20'>
            <Link to={"/projects/" + project.pid}>{project.name}</Link>
        </div>
    )
}

export default Project