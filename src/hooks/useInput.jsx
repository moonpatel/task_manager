import React, { useState } from 'react'

const useInput = ({ value = "", onChange }) => {
    const [val, setVal] = useState(value);

    const onChangeHandler = onChange ? onChange : (event) => {
        setVal(event.target.value);
    }

    return {
        value: val,
        onChange: onChangeHandler,
        setValue: setVal
    }
}

export default useInput