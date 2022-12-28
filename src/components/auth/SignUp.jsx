import React, { useContext, useState } from 'react'
import AuthContext from '../../context/auth-context';
import useInput from '../../hooks/useInput';
import Loader from '../UI/Loader';
const API_KEY = "AIzaSyBnlosOl8gQRozpoQqgJwVYKY5bVOCMPJM"

const SignUp = (props) => {
    const email = useInput({});
    const password = useInput({});
    const [isLoading, setIsLoading] = useState(false);
    const authCtx = useContext(AuthContext)

    const submitHandler = async (event) => {
        event.preventDefault();
        setIsLoading(true)
        try {

            let data = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`, {
                method: "POST",
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    email:email.value,
                    password:password.value,
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
                case "EMAIL_EXISTS":
                    console.log("Email already exists");
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
                <form className="flex flex-col space-y-6 justify-center align-middle w-96 h-fit mt-32 p-1" onSubmit={submitHandler} action="">
                    <h1 className="text-center text-3xl my-2">Don't have an account?</h1>
                    <div className='relative'>
                        {false ? <span className='absolute -bottom-5 left-6 text-sm text-red-800 font-semibold'>Error</span> : ""}
                        <input className="p-3 pl-6 w-full rounded-full cursor-default outline-none bg-transparent bg-white bg-opacity-20 placeholder-gray-200" {...email} type="text" placeholder="Email" />
                    </div>
                    <div className='relative'>
                        {false ? <span className='absolute -bottom-5 left-6 text-sm text-red-800 font-semibold'>Error</span> : ""}
                        <input className="p-3 pl-6 w-full rounded-full cursor-default outline-none bg-transparent bg-white bg-opacity-20 placeholder-gray-200" {...password} type="password" placeholder="Password" />
                    </div>
                    {/* <div className='h-3 text-center'><span class="font-medium text-center text-sm text-red-500">Your email is incorrect</span></div> */}
                    <button className="w-36 mx-auto p-3 rounded-full bg-red-200 text-black font-semibold outline-none hover:bg-orange-200">{isLoading ? <Loader className="mx-auto w-5 animate-spin" /> : "SIGN UP"}</button>
                    {/* <a href='./login' className="text-sm cursor-pointer">Forgot Password?</a> */}
                    <span>Already have an account? <span className='cursor-pointer font-bold text-green-900' onClick={props.toggle}>Sign In</span></span>
                </form>
            </div>
        </div>
    )
}

export default SignUp