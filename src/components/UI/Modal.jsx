import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'

export const BackDrop = (props) => {
    return (
        <div className='fixed top-0 left-0 w-full h-screen z-20 bg-black opacity-75'>
        </div>
    )
}

const Modal = (props) => {
    // useEffect(() => {
    //     document.querySelector('#backdrop-root').style.display = "block"
    //     document.querySelector('#modal-root').style.display = "block"
    // }, [])

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