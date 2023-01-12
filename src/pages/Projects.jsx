import React, { Fragment } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Project from '../components/Project/Project'
import TaskSection from '../components/Tasks/TaskSection'

const Projects = () => {

    return (
        <div className="w-full mt-10 px-10 dark:bg-dark-background">
            <div className="flex justify-between mb-7 dark:text-dark-bg-6">
                <h1 className="my-auto text-2xl font-semibold">Projects</h1>
                <h2 className="my-auto text-lg text-gray-800">This Week</h2>
            </div>
            <div className='flex'>
                <Routes>
                    <Route path='' element={<Fragment><Project />
                        <Project />
                        <Project />
                        </Fragment>} />
                    <Route path="project1" element={"hey"} />
                </Routes>
            </div>
        </div>
    )
    return (
        <div className="w-full mt-10 px-10 dark:bg-dark-background">
            <main>
                <div className="flex justify-between mb-7 dark:text-dark-bg-6">
                    <h1 className="my-auto text-2xl font-semibold">Projects</h1>
                    <h2 className="my-auto text-lg text-gray-800">This Week</h2>
                </div>
                <TaskSection />
            </main>
        </div>
    )
}

export default Projects