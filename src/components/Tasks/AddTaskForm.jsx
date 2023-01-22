import React, { useState } from 'react'
import Button from '../UI/Button'

const AddTaskForm = (props) => {
    const [title, setTitle] = useState("");
    const [details, setDetails] = useState("");

    const titleChangeHandler = (event) => {
        setTitle(event.target.value);
    }

    const detailsChangeHandler = (event) => {
        setDetails(event.target.value);
    }

    const addTaskHandler = (event) => {
        event.preventDefault();
        const task = {
            title, details
        }
        props.addTask(task);
        props.cancel();
    }

    return (
        <form onSubmit={addTaskHandler}>
            <div className={`mt-20 px-6 py-3 space-y-5 rounded-t-lg bg-white grid grid-cols-2 space-x-2 text-black/75`}>
                <h1 className=' text-2xl p-3 border-b col-span-2 font-semibold'>Create Task</h1>
                <div className='col-span-2'>
                    <label className=''>Task Name</label>
                    <input type="text" value={title} onChange={titleChangeHandler} className='p-2 px-3 w-full outline-none border rounded-md border-gray-300' />
                </div>
                <div className='col-span-2'>
                    <label className=''>Task Details</label>
                    <textarea className='p-2 px-3 w-full outline-none border rounded-lg border-gray-300' value={details} rows="3" onChange={detailsChangeHandler}></textarea>
                </div>
                <div className='col-span-1'>
                    <label className=''>Due Date</label>
                    <input type="date" value={""} onChange={titleChangeHandler} className='p-2 px-3 w-full outline-none border rounded-md border-gray-300' />
                </div>
                <div className='col-span-1'>
                    <label className=''>Due Time</label>
                    <input type="time" value={"00:00"} onChange={titleChangeHandler} className='p-2 px-3 w-full outline-none border rounded-md border-gray-300' />
                </div>
                <div className='col-span-2'>
                    <label className=''>Task Tags</label>
                    <input type="text" value={""} onChange={titleChangeHandler} className='p-2 px-3 w-full outline-none border rounded-md border-gray-300' />
                </div>
            </div>
            <div className='p-3 rounded-b-lg flex space-x-3 justify-end bg-gray-200' style={{ width: props.width }}>
                <Button className={`p-2 px-3 font-semibold`} onClick={props.cancel} content={"Cancel"} />
                <Button className={`p-2 px-4 rounded-xl font-semibold text-white bg-dark-primary-900`} type="submit" content={"Add"} />
            </div>
        </form>
    )
}

export default AddTaskForm