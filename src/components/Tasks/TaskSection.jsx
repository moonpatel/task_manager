import React from 'react'
import Modal from '../UI/Modal'
import AddTaskForm from './AddTaskForm'
import TaskGroup from './TaskGroup'

const allTasks = [
    {
        title: "To Do",
        tasks: [
            {
                title: "Design",
                body: "We need 2 different concepts for a software page in our program. I've attached 2 concepts that will give you an idea to reproduce but with a new look and feel. We'd like to keep the colors similar but you can add different colors."
            },
            {
                title: "Development",
                body: "Secured web platform that will integrate and pull from several other web apps to which I subscribe and have the api access to."
            }
        ]
    },
    {
        title: "In Progress",
        tasks: [
            {
                title: "Development",
                body: "Dynamic links to work with our iOS and Android apps."
            }
        ]
    },
    {
        title: "Completed",
        tasks: [
            {
                title: "Logo Design",
                body: "An existing redesign. The logo includes shading from light red to red, and I want to keep the exact shape, but make it one solid color."
            }
        ]
    }
]


const TaskSection = () => {

    return (
        <>
            <section className="grid grid-cols-3 space-x-3">
                {allTasks.map((taskgrp, index) => {
                    return <TaskGroup key={index} title={taskgrp.title} tasks={taskgrp.tasks} />
                })}
            </section>
            {/* <Modal width="720px"><AddTaskForm /></Modal> */}
        </>
    )
}

export default TaskSection