import React from 'react'
import Button from './Button'
import Card from './Card'

import {PlusIcon} from '@heroicons/react/24/outline'
import {PaperClipIcon} from '@heroicons/react/24/outline'


const TaskGroup = (props) => {
    return (
        <Card>
            <div className="col-span-1 p-3 space-y-3 rounded-2xl bg-[#f6fafa]">
                <div className="flex justify-between">
                    <h1 className="text-lg font-semibold">{props.title}</h1>
                    <div className="px-2 rounded-md font-semibold text-green-700 bg-green-200">{props.tasks.length}</div>
                </div>

                <Button className="w-full p-2 rounded-xl bg-[#e8f0f0]" content={<PlusIcon className='w-6 stroke-2 mx-auto stroke-[#53aa9a]' />} />

                <ul className="space-y-3">
                    {props.tasks.map((task,index) => {
                        return <li key={index} className="p-5 bg-[#fefffe] rounded-2xl shadow-lg shadow-gray-100">
                            <div className="flex justify-between mb-3">
                                <h1 className="text-xl font-semibold">{task.title}</h1>
                                <div>
                                    <PaperClipIcon className='w-6 stroke-gray-400' />
                                </div>
                            </div>
                            <div className="space-y-2 text-gray-600 text-sm">
                                {task.body}
                            </div>
                            <div className="-space-x-3 mt-2">
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
                            </div>
                        </li>
                    })}
                </ul>
            </div>
        </Card>
    )
}

export default TaskGroup