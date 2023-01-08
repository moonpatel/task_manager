import React, { useContext, useState } from 'react'
import TasksContext from '../../context/task-context';
import EditTaskForm from './EditTaskForm';
import Modal from '../UI/Modal';
import { PencilSquareIcon } from '@heroicons/react/24/outline'
import { TrashIcon } from '@heroicons/react/24/outline'
// import { PaperClipIcon } from '@heroicons/react/24/outline'

const Task = ({ title, body, keyVal, editTask, deleteTask }) => {
    const [showEditForm, setShowEditForm] = useState(false)

    const handleDeleteTask = (event) => {
        deleteTask(keyVal);
    }
    return (
        <div className="p-5 bg-[#fefffe] rounded-2xl shadow-lg shadow-gray-100 dark:bg-dark-background dark:shadow-none">
            <div className="flex justify-between mb-3">
                <h1 className="text-xl font-semibold dark:text-dark-on-background/75">{title}</h1>
                <div className='flex space-x-2'>
                    <TrashIcon className='w-5 stroke-dark-bg-6 cursor-pointer' onClick={handleDeleteTask} />
                    <PencilSquareIcon className='w-5 stroke-dark-bg-6 cursor-pointer' onClick={() => setShowEditForm(true)} />
                </div>
            </div>
            <p className="space-y-2 text-gray-600 text-sm dark:text-dark-on-background/50">
                {body}
            </p>
            {showEditForm && <Modal width="480px"><EditTaskForm index={keyVal} title={title} details={body} editTask={editTask} cancel={() => setShowEditForm(false)} /></Modal>}
            <div className="-space-x-2 mt-4">
                <div
                    className="inline-flex overflow-hidden relative justify-center items-center w-8 h-8 bg-red-400 rounded-full border-2 border-white dark:border-dark-background"
                >
                    <span className="font-medium text-white dark:text-dark-background">TN</span>
                </div>
                <div
                    className="inline-flex overflow-hidden relative justify-center items-center w-8 h-8 bg-violet-400 rounded-full border-2 border-white dark:border-dark-background"
                >
                    <span className="font-medium text-white dark:text-dark-background">VE</span>
                </div>
            </div>
        </div>
    )
}

export default Task
{/* <div>
    <PaperClipIcon className='w-6 stroke-gray-400' />
</div> */}