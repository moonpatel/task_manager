import React, { useState } from 'react'
import Button from '../UI/Button'
import Card from '../UI/Card'
import Modal from '../UI/Modal'
import Task from './Task'
import AddTaskForm from './AddTaskForm'

import { PlusIcon } from '@heroicons/react/24/outline'

const dummy_tasks = [
    {
        title: "Design",
        body: "We need 2 different concepts for a software page in our program. I've attached 2 concepts that will give you an idea to reproduce but with a new look and feel. We'd like to keep the colors similar but you can add different colors."
    },
    {
        title: "Development",
        body: "Secured web platform that will integrate and pull from several other web apps to which I subscribe and have the api access to."
    }
]

const TaskGroup = (props) => {
    const [showAddForm, setShowAddForm] = useState(false);
    const [tasks, setTasks] = useState(props.tasks);

    const addTask = (task) => {
        setTasks((prevTasks) => [...prevTasks, task])
    }

    const deleteTask = (index) => {
        setTasks((prevTasks) => prevTasks.filter((task, i) => i != index));
    }

    return (
        <Card>
            <div className="col-span-1 p-3 space-y-3 rounded-2xl bg-[#f6fafa]">
                <div className="flex justify-between">
                    <h1 className="text-lg font-semibold">{props.title}</h1>
                    <div className="px-2 rounded-md font-semibold text-green-700 bg-green-200">{tasks.length}</div>
                </div>

                <Button className="w-full p-2 rounded-xl bg-[#e8f0f0]" onClick={() => setShowAddForm(!showAddForm)} content={<PlusIcon className='w-6 stroke-2 mx-auto stroke-[#53aa9a]' />} />
                {showAddForm && <Modal width="640px"><AddTaskForm addTask={addTask} cancel={() => setShowAddForm(false)} /></Modal>}


                <ul className="space-y-3">
                    {tasks.map((task, index) => {
                        return <Task key={index} keyVal={index} title={task.title} body={task.body} deleteTask={deleteTask} />
                    })}
                </ul>
            </div>
        </Card>
    )
}

export default TaskGroup