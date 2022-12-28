import React from 'react'
import TaskGroup from './TaskGroup'

import { ReactComponent as SearchIcon } from '../assets/svg/search.svg'
import { ReactComponent as BellIcon } from '../assets/svg/bell.svg'

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

const MainSection = () => {
    return (
        <div className="w-4/5 h-screen px-10">
            {/* <!-- navbar --> */}
            <nav className="flex align-middle my-10 space-x-3">
                {/* <!-- search icon --> */}
                <div className="flex my-auto rounded-xl bg-gray-50 w-2/3">
                    <SearchIcon />
                    <input
                        className="my-auto w-full h-10 rounded-xl bg-gray-50 focus:outline-none"
                        type="text"
                        placeholder="Search"
                    />
                </div>
                <div className="flex justify-end w-1/3 space-x-3">
                    <BellIcon />

                    <div className="my-auto font-semibold px-5">{localStorage.getItem('email')}</div>
                    <div className="mr-6 relative">
                        <img className="h-12 rounded-full inline-block mr-6" src="../../assets/images/user.png" alt="" />
                    </div>
                </div>
            </nav>

            {/* <!-- main content --> */}
            <main>
                <div className="flex justify-between mb-7">
                    <h1 className="my-auto text-2xl font-semibold">Projects</h1>
                    <h2 className="my-auto text-lg text-gray-800">This Week</h2>
                </div>

                <section className="grid grid-cols-3 space-x-3">
                    {allTasks.map((taskgrp,index) => {
                        return <TaskGroup key={index} title={taskgrp.title} tasks={taskgrp.tasks} />
                    })}
                </section>
            </main>
        </div>
    )
}

export default MainSection