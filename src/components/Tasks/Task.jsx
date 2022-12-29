import React, { useContext } from 'react'
import TasksContext from '../../context/task-context';
// import { PaperClipIcon } from '@heroicons/react/24/outline'
import { PencilSquareIcon } from '@heroicons/react/24/outline'
import { TrashIcon } from '@heroicons/react/24/outline'

const Task = ({ title, body, keyVal, deleteTask }) => {
    const handleDeleteTask = (event) => {
        deleteTask(keyVal);
    }
    return (
        <div className="p-5 bg-[#fefffe] rounded-2xl shadow-lg shadow-gray-100">
            <div className="flex justify-between mb-3">
                <h1 className="text-xl font-semibold">{title}</h1>
                <div className='flex space-x-2'>
                    <TrashIcon className='w-5 stroke-gray-400 cursor-pointer' onClick={handleDeleteTask} />
                    <PencilSquareIcon className='w-5 stroke-gray-400 cursor-pointer' />
                </div>
            </div>
            <p className="space-y-2 text-gray-600 text-sm">
                {body}
            </p>
        </div>
    )
}

export default Task
{/* <div>
    <PaperClipIcon className='w-6 stroke-gray-400' />
</div> */}
{/* <div className="-space-x-3 mt-2">
    <div
        className="inline-flex overflow-hidden relative justify-center items-center w-10 h-10 bg-red-400 rounded-full border-[3px] border-white"
    >
        <span className="font-medium text-white">TN</span>
    </div>
    <div
        className="inline-flex overflow-hidden relative justify-center items-center w-10 h-10 bg-violet-400 rounded-full border-[3px] border-white"
    >
        <span className="font-medium text-white">VE</span>
    </div>
</div> */}