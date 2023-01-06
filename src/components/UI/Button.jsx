import React from 'react'

const Button = ({ className, type, content, bgColor, onClick }) => {
  const bgc = bgColor ? `bg-${bgColor}` : ""
  const style = `p-3 text-center outline-none rounded-full bg-white ${className} ${bgc}}`
  return (
    <button type={type || 'button'} className={style} onClick={onClick}>
      {content}
    </button>
  )
}

export default Button