import React, { Fragment, useContext, useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Project from '../components/Project/Project'
import TaskSection from '../components/Tasks/TaskSection'
import Button from '../components/UI/Button'
import Modal from '../components/UI/Modal'
import AuthContext from '../context/auth-context'
import { createProjectInFirestore, fetchProjects } from '../utilities/projects/projects'
import { PlusIcon } from '@heroicons/react/24/outline'


const Projects = () => {
    const [showForm, setShowForm] = useState(false)
    const [projects, setProjects] = useState([]);
    const [projectName, setProjectName] = useState("");
    const { user } = useContext(AuthContext);

    useEffect(() => {
        // fetch project from either local Storage (if available) or from firestore database
        fetchProjects(user.displayName, setProjects);
    }, []);

    const onProjectChangeHandler = (event) => {
        setProjectName(event.target.value);
    }
    const createProject = async (event) => {
        event.preventDefault();
        createProjectInFirestore({ name: projectName }, user.displayName, setProjects).then(res => {
            setShowForm(false);
        });
    }

    return (
        <div className="w-full mt-10 px-10 dark:bg-dark-background">
            <div className="flex justify-between mb-7 dark:text-dark-bg-6">
                <h1 className="my-auto text-2xl font-semibold">Projects</h1>
                <h2 className="my-auto text-lg text-gray-800">This Week</h2>
            </div>
            <div className='flex flex-wrap gap-6'>
                <Routes>
                    <Route path='*' element={<Fragment>{projects && projects.map(elem => <Project key={elem.pid} project={elem} />)}
                        <div className='p-3 w-44 rounded-lg flex items-center text-white bg-dark-background dark:bg-dark-bg-2 mr-4 cursor-pointer' onClick={() => setShowForm(true)}>
                            <PlusIcon className='w-10 m-auto' />
                        </div>
                    </Fragment>} />
                    <Route path={":projectID"} element={<TaskSection />} />
                </Routes>
            </div>
            {showForm && <Modal>
                <form onSubmit={createProject}>
                    <div className={`mt-20 px-6 py-3 space-y-5 rounded-t-lg bg-white grid grid-cols-2 space-x-2 text-black/75`}>
                        <h1 className=' text-2xl p-3 border-b col-span-2 font-semibold'>Create Project</h1>
                        <div className='col-span-2'>
                            <label className=''>Project Name</label>
                            <input type="text" value={projectName} onChange={onProjectChangeHandler} className='p-2 px-3 w-full outline-none border rounded-md border-gray-300' />
                        </div>
                        <div className='col-span-2'>
                            <label className=''>Project Tags</label>
                            <input type="text" className='p-2 px-3 w-full outline-none border rounded-md border-gray-300' />
                        </div>
                    </div>
                    <div className='p-3 rounded-b-lg flex space-x-3 justify-end bg-gray-200'>
                        <Button className={`p-2 px-3 font-semibold`} onClick={() => setShowForm(false)} content={"Cancel"} />
                        <Button className={`p-2 px-4 rounded-xl font-semibold text-white bg-dark-primary-900`} type="submit" content={"Add"} />
                    </div>
                </form>
            </Modal>}
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