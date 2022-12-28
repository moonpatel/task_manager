import React, { useState, useContext } from 'react'
import AuthContext from '../../context/auth-context';
import Loader from '../UI/Loader';
const API_KEY = "AIzaSyBnlosOl8gQRozpoQqgJwVYKY5bVOCMPJM"


const SignIn = (props) => {
    const [enteredEmail, setEnteredEmail] = useState("");
    const [enteredPassword, setEnteredPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const authContext = useContext(AuthContext);

    const emailChangeHandler = event => {
        setEnteredEmail(event.target.value);
    }
    const passwordChangeHandler = event => {
        setEnteredPassword(event.target.value)
    }
    const submitHandler = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        let data = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`, {
            method: "POST",
            headers: {
                'Content-type': 'application.json'
            },
            body: JSON.stringify({
                email: enteredEmail,
                password: enteredPassword,
                returnSecureToken: true
            })
        })

        data = await data.json();
        console.log(data);
        authContext.login(data);

        setIsLoading(false);
        setEnteredEmail("");
        setEnteredPassword("");
    }

    return (
        <div className="w-full space-y-3 divide-y-4 divide-black text-gray-200">
            <div className="flex justify-center w-full h-screen bg-cover bg-blend-multiply bg-gray-400 bg-mountain">
                <form className="flex flex-col space-y-5 justify-center align-middle w-96 h-fit mt-32 p-1 bg-transparent" onSubmit={submitHandler} >
                    <h1 className="text-center text-3xl my-2">Have an Account?</h1>
                    <div className='relative'>
                        {false ? <span className='absolute -bottom-5 left-6 text-sm text-red-800 font-semibold'>Error</span> : ""}
                        <input className="p-3 pl-6 w-full rounded-full cursor-default outline-none bg-transparent bg-white bg-opacity-20 placeholder-gray-200" onChange={emailChangeHandler} value={enteredEmail} type="text" placeholder="Email" />
                    </div>
                    <div className='relative'>
                        {false ? <span className='absolute -bottom-5 left-6 text-sm text-red-800 font-semibold'>Error</span> : ""}
                        <input className="p-3 pl-6 w-full rounded-full cursor-default outline-none bg-transparent bg-white bg-opacity-20 placeholder-gray-200" onChange={passwordChangeHandler} value={enteredPassword} type="password" placeholder="Password" />
                    </div>
                    <button className="w-36 mx-auto p-3 rounded-full bg-red-200 text-black font-semibold outline-none hover:bg-orange-200">{isLoading ? <Loader className="mx-auto w-5 animate-spin" /> : "SIGN IN"}</button>
                    <a href='./login' className="text-sm cursor-pointer">Forgot Password?</a>
                    <span>Don't have an account? <span className='cursor-pointer font-bold text-green-900' onClick={props.toggle}>Sign Up</span></span>
                </form>
            </div>
        </div>
    )
}

export default SignIn