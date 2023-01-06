import React from 'react'
import { EllipsisHorizontalIcon } from '@heroicons/react/24/outline'

const Chats = () => {
    return (
        <div className='grid grid-cols-7 pt-20 h-full divide-x dark:text-dark-on-background dark:bg-dark-background'>
            {/* contacts-bar */}
            <div className='col-span-2'>
                <header className='flex my-auto justify-between pl-2 h-[70px] w-full border-b'>
                    <div className='my-auto'>
                        <h1 className='text-xl font-semibold'>Messages</h1>
                        <span className='text-sm font-semibold text-black/50'>Direct and team messages</span>
                    </div>
                    <EllipsisHorizontalIcon className='w-8 mx-3 cursor-pointer stroke-dark-background' />
                    {/* <div className='my-auto px-5 text-3xl'>...</div> */}
                </header>
                {/* <button className='w-full rounded-md py-2 bg-dark-primary-800'>Create Conversation</button> */}
                <ul className='pl-2 space-y-1 mr-1 h-[80vh] overflow-y-scroll bg-red-200'>
                    <li className='flex h-16'>
                        <div className='w-10 bg-black h-10 rounded-full p-3 mx-3 my-auto'>l</div>
                        <div className='my-auto'>
                            <h1 className='inline-block font-bold mr-3'>Robert</h1>
                            <span className='inline text-[12px] text-black/40 font-medium'>Just now</span>
                            <div className='text-sm text-black/50 font-medium'>I'll do that task now, you can...</div>
                        </div>
                    </li>
                    <li className='flex h-16'>
                        <div className='w-10 bg-black h-10 rounded-full p-3 mx-3 my-auto'>l</div>
                        <div className='my-auto'>
                            <h1 className='inline-block font-bold mr-3'>Robert</h1>
                            <span className='inline text-[12px] text-black/40 font-medium'>Just now</span>
                            <div className='text-sm text-black/50 font-medium'>I'll do that task now, you can...</div>
                        </div>
                    </li>
                    <li className='flex h-16'>
                        <div className='w-10 bg-black h-10 rounded-full p-3 mx-3 my-auto'>l</div>
                        <div className='my-auto'>
                            <h1 className='inline-block font-bold mr-3'>Robert</h1>
                            <span className='inline text-[12px] text-black/40 font-medium'>Just now</span>
                            <div className='text-sm text-black/50 font-medium'>I'll do that task now, you can...</div>
                        </div>
                    </li>
                    <li className='flex h-16'>
                        <div className='w-10 bg-black h-10 rounded-full p-3 mx-3 my-auto'>l</div>
                        <div className='my-auto'>
                            <h1 className='inline-block font-bold mr-3'>Robert</h1>
                            <span className='inline text-[12px] text-black/40 font-medium'>Just now</span>
                            <div className='text-sm text-black/50 font-medium'>I'll do that task now, you can...</div>
                        </div>
                    </li>
                    <li className='flex h-16'>
                        <div className='w-10 bg-black h-10 rounded-full p-3 mx-3 my-auto'>l</div>
                        <div className='my-auto'>
                            <h1 className='inline-block font-bold mr-3'>Robert</h1>
                            <span className='inline text-[12px] text-black/40 font-medium'>Just now</span>
                            <div className='text-sm text-black/50 font-medium'>I'll do that task now, you can...</div>
                        </div>
                    </li>
                    <li className='flex h-16'>
                        <div className='w-10 bg-black h-10 rounded-full p-3 mx-3 my-auto'>l</div>
                        <div className='my-auto'>
                            <h1 className='inline-block font-bold mr-3'>Robert</h1>
                            <span className='inline text-[12px] text-black/40 font-medium'>Just now</span>
                            <div className='text-sm text-black/50 font-medium'>I'll do that task now, you can...</div>
                        </div>
                    </li>
                    <li className='flex h-16'>
                        <div className='w-10 bg-black h-10 rounded-full p-3 mx-3 my-auto'>l</div>
                        <div className='my-auto'>
                            <h1 className='inline-block font-bold mr-3'>Robert</h1>
                            <span className='inline text-[12px] text-black/40 font-medium'>Just now</span>
                            <div className='text-sm text-black/50 font-medium'>I'll do that task now, you can...</div>
                        </div>
                    </li>
                    <li className='flex h-16'>
                        <div className='w-10 bg-black h-10 rounded-full p-3 mx-3 my-auto'>l</div>
                        <div className='my-auto'>
                            <h1 className='inline-block font-bold mr-3'>Robert</h1>
                            <span className='inline text-[12px] text-black/40 font-medium'>Just now</span>
                            <div className='text-sm text-black/50 font-medium'>I'll do that task now, you can...</div>
                        </div>
                    </li>
                    <li className='flex h-16'>
                        <div className='w-10 bg-black h-10 rounded-full p-3 mx-3 my-auto'>l</div>
                        <div className='my-auto'>
                            <h1 className='inline-block font-bold mr-3'>Robert</h1>
                            <span className='inline text-[12px] text-black/40 font-medium'>Just now</span>
                            <div className='text-sm text-black/50 font-medium'>I'll do that task now, you can...</div>
                        </div>
                    </li>
                </ul>
            </div>
            {/* message-box  */}
            <div className='relative col-span-5 min-h-[75%]'>
                <div className='flex justify-center border-b space-x-3 py-3 pt-4 h-[70px]'>
                    <div className='w-10 bg-black h-10 rounded-full'>l</div>
                    <h1 className='text-lg font-semibold my-auto'>Juliana</h1>
                    <span className='my-auto text-sm text-black/50 font-semibold'>2hrs ago</span>
                </div>
                {/* messages  */}
                <div className='space-y-2 px-9 mr-1 min-h-[500px] h-[80vh] overflow-y-auto'>
                    {/* message received  */}
                    <div className='flex mt-5 space-x-3'>
                        <div className=' mt-1 w-10 bg-black h-10 rounded-full'>l</div>
                        <div className='my-auto bg-black/10 text-black p-2 px-3 max-w-[75%] rounded-md'>Loremmet Cum, molestiae impedit fuga saepe eos. Tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil soluta voluptatum atque labore quis. Commodi, beatae in. In eligendi nobis fugiat ipsam molestias numquam aliquam nihil! Velit deserunt aliquid repellendus?</div>
                        {/* <div>25/10/2022 * 10:00 AM</div> */}
                    </div>
                    {/* message sent */}
                    <div className='flex justify-end space-x-3'>
                        <div className='my-auto p-2 px-3 rounded-md bg-dark-secondary-900 text-white/90 max-w-[75%]'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odi lorem Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque similique fugiat veritatis excepturi aspernatur accusantium sit? Ipsum, dolor! Hic illo cumque nostrum nesciunt, ad iusto omnis aliquid debitis fuga perspiciatis.
                        </div>
                        <div className='mt-1 w-10 bg-black h-10 rounded-full'>l</div>
                        {/* <div>Today * 2hrs ago</div> */}
                    </div>
                    <div className='flex justify-end space-x-3'>
                        <div className='my-auto p-2 px-3 rounded-md bg-dark-secondary-900 text-white/90 max-w-[75%]'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odi lorem Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque similique fugiat veritatis excepturi aspernatur accusantium sit? Ipsum, dolor! Hic illo cumque nostrum nesciunt, ad iusto omnis aliquid debitis fuga perspiciatis.
                        </div>
                        <div className='mt-1 w-10 bg-black h-10 rounded-full'>l</div>
                        {/* <div>Today * 2hrs ago</div> */}
                    </div>
                    <div className='flex justify-end space-x-3'>
                        <div className='my-auto p-2 px-3 rounded-md bg-dark-secondary-900 text-white/90 max-w-[75%]'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odi lorem Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque similique fugiat veritatis excepturi aspernatur accusantium sit? Ipsum, dolor! Hic illo cumque nostrum nesciunt, ad iusto omnis aliquid debitis fuga perspiciatis.
                        </div>
                        <div className='mt-1 w-10 bg-black h-10 rounded-full'>l</div>
                        {/* <div>Today * 2hrs ago</div> */}
                    </div>
                    <div className='flex justify-end space-x-3'>
                        <div className='my-auto p-2 px-3 rounded-md bg-dark-secondary-900 text-white/90 max-w-[75%]'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odi lorem Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque similique fugiat veritatis excepturi aspernatur accusantium sit? Ipsum, dolor! Hic illo cumque nostrum nesciunt, ad iusto omnis aliquid debitis fuga perspiciatis.
                        </div>
                        <div className='mt-1 w-10 bg-black h-10 rounded-full'>l</div>
                    </div>
                    <div className='flex justify-end space-x-3'>
                        <div className='my-auto p-2 px-3 rounded-md bg-dark-secondary-900 text-white/90 max-w-[75%]'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odi lorem Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque similique fugiat veritatis excepturi aspernatur accusantium sit? Ipsum, dolor! Hic illo cumque nostrum nesciunt, ad iusto omnis aliquid debitis fuga perspiciatis.
                        </div>
                        <div className='mt-1 w-10 bg-black h-10 rounded-full'>l</div>
                    </div>
                    <div className='flex justify-end space-x-3'>
                        <div className='my-auto p-2 px-3 rounded-md bg-dark-secondary-900 text-white/90 max-w-[75%]'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odi lorem Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque similique fugiat veritatis excepturi aspernatur accusantium sit? Ipsum, dolor! Hic illo cumque nostrum nesciunt, ad iusto omnis aliquid debitis fuga perspiciatis.
                        </div>
                        <div className='mt-1 w-10 bg-black h-10 rounded-full'>l</div>
                    </div>
                </div>
                <div className='bottom-0 absolute w-full flex px-3 space-x-2 bg-white '>
                    <input type="text" className='my-3 p-2 px-4 w-full outline-none bg-black/5 border-2 rounded-md border-black/30' placeholder='Type message...' />
                    <button className=''>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Chats