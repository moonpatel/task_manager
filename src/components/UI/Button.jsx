import React from 'react'

const Button = (props) => {
  return (
    <button className={props.className}>
        {props.content}
    </button>
  )
}

export default Button