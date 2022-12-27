import React, { useContext, useState } from 'react'
import AuthContext from '../../context/auth-context';
import Loader from '../UI/Loader';
const API_KEY = "AIzaSyBnlosOl8gQRozpoQqgJwVYKY5bVOCMPJM"

const SignUp = (props) => {
    const [enteredEmail, setEnteredEmail] = useState("");
    const [enteredPassword, setEnteredPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const authContext = useContext(AuthContext)

    const emailChangeHandler = event => {
        setEnteredEmail(event.target.value);
    }
    const passwordChangeHandler = event => {
        setEnteredPassword(event.target.value)
    }
    const submitHandler = async (event) => {
        event.preventDefault();
        setIsLoading(true)
        let data = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`, {
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
                <form className="flex flex-col space-y-5 justify-center align-middle w-96 h-fit mt-32 p-1" onSubmit={submitHandler} action="">
                    <h1 className="text-center text-3xl my-2">Don't have an account?</h1>
                    <input className="p-3 pl-5 rounded-full outline-none bg-transparent bg-white bg-opacity-10 placeholder-gray-200" onChange={emailChangeHandler} value={enteredEmail} type="text" placeholder="Email" />
                    <input className="p-3 pl-5 rounded-full outline-none bg-transparent bg-white bg-opacity-10 placeholder-gray-200" onChange={passwordChangeHandler} value={enteredPassword} type="password" placeholder="Password" />
                    <button className="w-full p-3 rounded-full bg-red-200 text-black font-semibold outline-none hover:bg-orange-200">{isLoading ? <Loader className="mx-auto w-5 animate-spin" /> : "SIGN UP"}</button>
                    <a href='./login' className="text-sm cursor-pointer">Forgot Password?</a>
                    <span>Already have an account. <span className='cursor-pointer' onClick={props.toggle}>Sign In</span></span>
                    {/* <h3 className="text-center">-Or Sign In with-</h3> */}
                </form>
            </div>
        </div>
    )
}

export default SignUp