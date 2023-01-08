import React from 'react'

const DropDown = ({ open, children }) => {
    return (
        <React.Fragment>
            {open && <div className='absolute flex flex-col w-48 top-[60px] rounded-lg right-2 bg-white shadow-lg dark:bg-dark-bg-3 dark:shadow-none px-4 p-3'>
                {children}
            </div>
            }
        </React.Fragment>
    )
}

export default DropDown