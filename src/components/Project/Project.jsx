import React from 'react'
import { Link } from 'react-router-dom'

const Project = ({ project }) => {
    return (
        <div className='p-3 w-72 rounded-lg text-white bg-dark-background dark:bg-dark-bg-2 pb-32 text-3xl'>
            <Link to={"/projects/" + project.pid}>{project.name}</Link>
        </div>
    )
}

export default Project