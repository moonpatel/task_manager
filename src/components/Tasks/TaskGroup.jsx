import React, { useState } from 'react'
import Button from '../UI/Button'
import Card from '../UI/Card'
import Modal from '../UI/Modal'
import Task from './Task'
import AddTaskForm from './AddTaskForm'

import { PlusIcon } from '@heroicons/react/24/outline'

const TaskGroup = (props) => {
    const [showAddForm, setShowAddForm] = useState(false);
    const [tasks, setTasks] = useState(props.tasks);

    const addTask = (task) => {
        setTasks((prevTasks) => [...prevTasks, task])
    }

    const editTask = (task, index) => {
        setTasks(prevTasks => {
            prevTasks[index] = task;
            console.log(prevTasks);
            return prevTasks;
        })
    }

    const deleteTask = (index) => {
        setTasks((prevTasks) => prevTasks.filter((task, i) => i != index));
    }

    return (
        <div className="col-span-1 p-3 space-y-3 rounded-2xl bg-gray-100 dark:bg-dark-bg-1">
            <div className="flex justify-between">
                <h1 className="text-lg font-semibold dark:text-dark-on-background">{props.title}</h1>
                <div className="px-2 rounded-md font-semibold text-green-700 bg-green-200 dark:bg-dark-primary-900 dark:text-dark-background">{tasks.length}</div>
            </div>

            <Button className="w-full p-2 rounded-xl gradient-3 hover:gradient-4 dark:bg-dark-primary-900 dark:hover:gradient-2" onClick={() => setShowAddForm((prev) => !prev)} content={<PlusIcon className='w-6 stroke-2 mx-auto stroke-white' />} />
            {showAddForm && <Modal width="480px"><AddTaskForm addTask={addTask} cancel={() => setShowAddForm(false)} /></Modal>}


            <ul className="space-y-3">
                {tasks.map((task, index) => {
                    return <Task key={index} keyVal={index} title={task.title} body={task.body} editTask={editTask} deleteTask={deleteTask} />
                })}
            </ul>
        </div>
    )
}

export default TaskGroup