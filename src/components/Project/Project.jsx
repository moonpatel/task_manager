import React from 'react'
import { Link } from 'react-router-dom'

const Project = () => {
    return (
        <div className='p-3 w-32 rounded-lg text-white bg-dark-background dark:bg-dark-bg-2 pb-20 mr-4'>
            <Link to="/projects/project1">Project1</Link>
        </div>
    )
}

export default Project