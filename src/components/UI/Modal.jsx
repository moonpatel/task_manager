import React from 'react'
import ReactDOM from 'react-dom'

export const BackDrop = (props) => {
    return (
        <div className='bg-transparent bg-opacity-50 bg-black w-screen absolute h-screen'>
        </div>
    )
}

const Modal = (props) => {

    return (
        <>
            {ReactDOM.createPortal(<BackDrop />,document.querySelector('#backdrop-root'))}
            {ReactDOM.createPortal(<div style={{width:props.width}} className={`absolute bg-transparent w-screen h-screen`}>{props.children}</div> ,document.querySelector('#modal-root'))}
        </>
    )
}

export default Modal