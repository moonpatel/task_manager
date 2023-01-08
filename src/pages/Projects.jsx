import React from 'react'
import Logout from '../components/Logout'
import TaskSection from '../components/Tasks/TaskSection'
import Modal from '../components/UI/Modal'

const Projects = () => {
    return (
        <div className="w-full mt-10 px-10 dark:bg-dark-background">
            <main>
                <div className="flex justify-between mb-7 dark:text-dark-bg-6">
                    <h1 className="my-auto text-2xl font-semibold">Projects</h1>
                    <h2 className="my-auto text-lg text-gray-800">This Week</h2>
                </div>

                <TaskSection />
            </main>
            {/* <Modal width={"360px"}>
                <Logout />
            </Modal> */}
        </div>

    )
}

export default Projects