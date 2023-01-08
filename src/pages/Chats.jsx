import React from 'react'
import { EllipsisHorizontalIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline'

const Chats = () => {
    return (
        <div className='grid grid-cols-7 divide-x dark:divide-dark-bg-3 dark:text-dark-on-background dark:bg-dark-background'>
            {/* contacts-bar */}
            <div className='col-span-2 '>
                <header className='flex my-auto justify-between pl-3 h-[70px] border-b dark:border-b-dark-bg-3'>
                    <div className='my-auto'>
                        <h1 className='text-xl font-semibold dark:text-white/90'>Messages</h1>
                        <span className='text-sm text-black/50 dark:text-white/50'>Direct and team messages</span>
                    </div>
                    <EllipsisHorizontalIcon className='w-8 mx-3 cursor-pointer stroke-dark-background dark:stroke-dark-on-background/75' />
                    {/* <div className='my-auto px-5 text-3xl'>...</div> */}
                </header>
                {/* <button className='w-full rounded-md py-2 bg-dark-primary-800'>Create Conversation</button> */}
                <ul className='pl-2 space-y-3 dark:divide-dark-bg-4 h-[80vh] overflow-y-scroll dark:bg-dark-bg-1'>
                    <li className='flex h-16 my-auto dark:bg-dark-primary-900'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaRfD8-JpgZJhpTMUVMj7Ka9ohgnAIQFIjxuWQBkNO&s" className='rounded-full w-12 h-12 mx-2 my-auto' />
                        <div className='my-auto'>
                            <h1 className='inline-block font-semibold mr-3 dark:text-dark-background'>Robert</h1>
                            <span className='inline text-[12px] text-black/40 font-medium dark:text-dark-background'>Just now</span>
                            <div className='text-sm text-black/50 dark:text-dark-background/75'>I'll do that task now, you can...</div>
                        </div>
                    </li>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(val => <li className='flex h-16 my-auto'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaRfD8-JpgZJhpTMUVMj7Ka9ohgnAIQFIjxuWQBkNO&s" className='rounded-full w-12 h-12 mx-2 my-auto' />
                        <div className='my-auto'>
                            <h1 className='inline-block font-semibold mr-3 dark:text-white/80'>Robert</h1>
                            <span className='inline text-[12px] text-black/40 font-medium dark:text-white/20'>Just now</span>
                            <div className='text-sm text-black/50 dark:text-white/50'>I'll do that task now, you can...</div>
                        </div>
                    </li>)}
                </ul>
            </div>
            {/* message-box  */}
            <div className='relative col-span-5 min-h-[75%]'>
                <div className='flex px-5 border-b dark:border-b-dark-bg-3 space-x-3 py-3 h-[70px]'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaRfD8-JpgZJhpTMUVMj7Ka9ohgnAIQFIjxuWQBkNO&s" alt="" className='rounded-full w-12 h-12 mx-2 ' />
                    <h1 className='text-lg font-semibold my-auto'>Juliana</h1>
                    <span className='my-auto text-sm text-black/50 dark:text-white/40'>2hrs ago</span>
                </div>
                {/* messages  */}
                <div className='space-y-2 px-9 mr-1 min-h-[500px] h-[80vh] overflow-y-auto dark:bg-dark-bg-1 pattern'>
                    {/* message received  */}
                    <div className='flex mt-5 space-x-3'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaRfD8-JpgZJhpTMUVMj7Ka9ohgnAIQFIjxuWQBkNO&s" alt="" className='rounded-full w-12 h-12 mx-1 mt-1' />
                        <div className='my-auto bg-black/10 text-black p-2 px-3 max-w-[75%] rounded-md dark:bg-dark-bg-3 dark:text-white/75'>Loremmet Cum, molestiae impedit fuga saepe eos. Tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil soluta voluptatum atque labore quis. Commodi, beatae in. In eligendi nobis fugiat ipsam molestias numquam aliquam nihil! Velit deserunt aliquid repellendus?</div>
                        {/* <div>25/10/2022 * 10:00 AM</div> */}
                    </div>
                    {/* message sent */}
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((val, index) =>
                        <div key={index} className='flex justify-end space-x-3'>
                            <div className='my-auto p-2 px-3 rounded-md bg-dark-secondary-800 dark:bg-dark-primary-900 dark:text-black text-white/90 max-w-[75%]'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odi lorem Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque similique fugiat veritatis excepturi aspernatur accusantium sit? Ipsum, dolor! Hic illo cumque nostrum nesciunt, ad iusto omnis aliquid debitis fuga perspiciatis.
                            </div>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaRfD8-JpgZJhpTMUVMj7Ka9ohgnAIQFIjxuWQBkNO&s" alt="" className='rounded-full w-12 h-12 mx-1 mt-1' />
                            {/* <div>Today * 2hrs ago</div> */}
                        </div>
                    )}
                </div>
                <div className='bottom-0 absolute w-full flex px-5 space-x-3 bg-white dark:bg-dark-bg-2'>
                    <input type="text" className='my-3 p-2 px-4 w-full outline-none bg-black/5 rounded-md dark:bg-dark-bg-3' placeholder='Type message...' />
                    <button className=''><PaperAirplaneIcon className='w-9 text-white bg-dark-primary-900 dark:text-dark-background p-2 rounded-full' /></button>
                </div>
            </div>
        </div>
    )
}

export default Chats