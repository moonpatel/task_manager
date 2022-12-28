import React from 'react'

const Input = ({className,type,onChange,value}) => {
    const [value, setValue] = useState(value);

    return (
        <input className={className} type={type} onChange={onChange} value={value} />
    )
}

export default Input