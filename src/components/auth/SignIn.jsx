import React, { useState, useContext } from 'react'
import AuthContext from '../../context/auth-context';
import useInput from '../../hooks/useInput';
import Loader from '../UI/Loader';
const API_KEY = "AIzaSyBnlosOl8gQRozpoQqgJwVYKY5bVOCMPJM"


const SignIn = (props) => {
    const email = useInput({});
    const password = useInput({});
    const [isLoading, setIsLoading] = useState(false);
    const authCtx = useContext(AuthContext);

    const submitHandler = async (event) => {
        event.preventDefault();
        setIsLoading(true);

        try {

            let data = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`, {
                method: "POST",
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    email: email.value,
                    password: password.value,
                    returnSecureToken: true
                })
            })

            data = await data.json();
            if (data?.error?.code >= 400) throw data;
            authCtx.login(data);
        } catch (e) {
            console.log(e)
            switch (e.error.message) {
                case "INVALID_EMAIL":
                    console.log("Email is invalid.");
                    break;
                case "EMAIL_NOT_FOUND":
                    console.log("Incorrect email or password");
                    break;
                case "INVALID_PASSWORD":
                    console.log("Incorrect email or password");
                    break;
                case "USER_DISABLED":
                    console.log("Account is disabled by admin.");
                    break;
                default:
                    console.log("Unknown error occured.");
                    break;
            }
        }

        setIsLoading(false);
        email.setValue("");
        password.setValue("");
    }

    return (
        <div className="w-full space-y-3 divide-y-4 divide-black text-gray-200">
            <div className="flex justify-center w-full h-screen bg-cover bg-blend-multiply bg-gray-400 bg-mountain">
                <form className="flex flex-col space-y-5 justify-center align-middle w-96 h-fit mt-32 p-1 bg-transparent" onSubmit={submitHandler} >
                    <h1 className="text-center text-3xl my-2">Have an Account?</h1>
                    <div className='relative'>
                        {false ? <span className='absolute -bottom-5 left-6 text-sm text-red-800 font-semibold'>Error</span> : ""}
                        <input className="p-3 pl-6 w-full rounded-full cursor-default outline-none bg-transparent bg-white bg-opacity-20 placeholder-gray-200" {...email} type="text" placeholder="Email" />
                    </div>
                    <div className='relative'>
                        {false ? <span className='absolute -bottom-5 left-6 text-sm text-red-800 font-semibold'>Error</span> : ""}
                        <input className="p-3 pl-6 w-full rounded-full cursor-default outline-none bg-transparent bg-white bg-opacity-20 placeholder-gray-200" {...password} type="password" placeholder="Password" />
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