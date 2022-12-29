import React, { useState } from 'react'
import Button from '../UI/Button';

const EditTaskForm = (props) => {
    const [title, setTitle] = useState(props.title);
    const [details, setDetails] = useState(props.details);

    const titleChangeHandler = (event) => {
        setTitle(event.target.value);
    }

    const detailsChangeHandler = (event) => {
        setDetails(event.target.value);
    }

    const editTaskHandler = (event) => {
        event.preventDefault();
        const task = {
            title, body: details
        }
        props.editTask(task,props.index);
        props.cancel();
    }

    return (
        <form onSubmit={editTaskHandler}>
            <div className={`mt-32 p-6 space-y-5 rounded-t-lg bg-white`}>
                <h1 className='mb-3 text-2xl text-center font-semibold'>Edit Task</h1>
                <div className='flex space-x-5'>
                    <label className='my-auto w-14 text-lg text-gray-600 font-semibold'>Title</label>
                    <input type="text" value={title} onChange={titleChangeHandler} className='p-2 px-3 w-full outline-none border rounded-lg border-gray-300' />
                </div>
                <div className='flex space-x-3'>
                    <label className='mt-1 w-16 text-lg text-gray-600 font-semibold'>Details</label>
                    <textarea className='p-2 px-3 w-full outline-none border rounded-lg border-gray-300' value={details} rows="5" onChange={detailsChangeHandler}></textarea>
                </div>
            </div>
            <div className='mx-auto py-3 pr-3 rounded-b-lg flex space-x-3 justify-end bg-gray-200' style={{ width: props.width }}>
                <Button className={`p-2 px-3 font-semibold text-gray-700`} onClick={props.cancel} content={"Cancel"} />
                <Button className={`p-2 px-4 rounded-xl font-semibold text-white bg-green-500`} type="submit" content={"Edit"} />
            </div>
        </form>
    )
}

export default EditTaskForm