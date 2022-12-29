import React from 'react'
import Button from '../UI/Button'


const AddTaskForm = (props) => {
    return (
        <>
            <div className={`mx-auto mt-32 block p-6 space-y-5 rounded-t-lg bg-white`}>
                <h1 className='mb-3 text-2xl text-center font-semibold'>Add Task</h1>
                <div className='flex space-x-5'>
                    <label className='my-auto w-14 text-lg text-gray-600 font-semibold'>Title</label>
                    <input type="text" className='p-2 px-3 w-full outline-none border rounded-lg border-gray-300' />
                </div>
                <div className='flex space-x-3'>
                    <label className='mt-1 w-16 text-lg text-gray-600 font-semibold'>Details</label>
                    <textarea className='p-2 px-3 w-full outline-none border rounded-lg border-gray-300' rows="5" ></textarea>
                </div>
            </div>
            <div className='mx-auto py-3 pr-3 rounded-b-lg flex space-x-3 justify-end bg-gray-200' style={{ width: props.width }}>
                <Button className={`p-2 px-3 font-semibold text-gray-700`} content={"Cancel"} />
                <Button className={`p-2 px-4 rounded-xl font-semibold text-white bg-green-500`} content={"Add"} />
            </div>
        </>

    )
}

export default AddTaskForm