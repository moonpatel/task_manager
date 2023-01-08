import React from 'react'
import ReactDOM from 'react-dom'

export const BackDrop = () => {
    return (
        <div className='fixed top-0 left-0 w-full h-screen z-20 bg-black/60 backdrop-blur-sm'>
        </div>
    )
}

const Modal = (props) => {
    return (
        <>
            {ReactDOM.createPortal(<BackDrop />, document.querySelector('#backdrop'))}
            {ReactDOM.createPortal(<div className={`fixed w-full z-30 flex justify-center`}>
                <div style={{ width: props.width }}>
                    {props.children}
                </div>
            </div>, document.querySelector('#modal'))}
        </>
    )
}

export default Modal