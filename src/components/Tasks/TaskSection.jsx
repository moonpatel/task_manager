import { getDoc, getFirestore, doc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchTasks } from '../../utilities/tasks/tasks';
import TaskGroup from './TaskGroup'
const db = getFirestore();

// const allTasks = [
//     {
//         title: "To Do",
//         tasks: [
//             {
//                 title: "Design",
//                 body: "We need 2 different concepts for a software page in our program. I've attached 2 concepts that will give you an idea to reproduce but with a new look and feel. We'd like to keep the colors similar but you can add different colors."
//             },
//             {
//                 title: "Development",
//                 body: "Secured web platform that will integrate and pull from several other web apps to which I subscribe and have the api access to."
//             }
//         ]
//     },
//     {
//         title: "In Progress",
//         tasks: [
//             {
//                 title: "Development",
//                 body: "Dynamic links to work with our iOS and Android apps."
//             }
//         ]
//     },
//     {
//         title: "Completed",
//         tasks: [
//             {
//                 title: "Logo Design",
//                 body: "An existing redesign. The logo includes shading from light red to red, and I want to keep the exact shape, but make it one solid color."
//             }
//         ]
//     }
// ]


const TaskSection = () => {
    const { projectID: pid } = useParams();
    const [todo, setTodo] = useState([]);
    const [inProgress, setInProgress] = useState([]);
    const [completed, setCompleted] = useState([]);

    useEffect(() => {
        fetchTasks(pid, setTodo, setInProgress, setCompleted);
    }, []);

    return (
        <section className="grid grid-cols-3 space-x-3 w-full">
            <TaskGroup pid={pid} title="To Do" tasks={todo} />
            <TaskGroup pid={pid} title="In Progress" tasks={inProgress} />
            <TaskGroup pid={pid} title="Completed" tasks={completed} />
        </section>
    )
}

export default TaskSection