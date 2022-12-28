import React, { useState } from 'react'
import SignIn from './SignIn';
import SignUp from './SignUp';

const Authentication = (props) => {
    const [isSignUp, setIsSignUp] = useState(true);

    const togglePage = () => {
        setIsSignUp((prevState) => !prevState);
    }

    return (
        <React.Fragment>
            {isSignUp ? (<SignUp toggle={togglePage} />) : (<SignIn toggle={togglePage} />)}
        </React.Fragment>
    )
}

export default Authentication