import React, { useState } from 'react'

const useInput = ({ value, onChange }) => {
    const [value, setValue] = useState(value);

    const onChangeHandler = onChange ? onChange : (event) => {
        setValue(event.target.value);
    }

    return {
        value,
        onChange: onChangeHandler
    }
}

export default useInput