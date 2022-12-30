import React, { useContext, useState } from 'react'
import useInput from '../../hooks/useInput'
import AuthContext from '../../context/auth-context'
import Loader from '../UI/Loader'
import Button from '../UI/Button'
import authErrorHandler from '../../utilities/authErrorHandler'

const API_KEY = "AIzaSyBnlosOl8gQRozpoQqgJwVYKY5bVOCMPJM"
const signUpURL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`
const signInURL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`

const inputStyle = "p-3 pl-6 w-full rounded-full cursor-default outline-none bg-transparent bg-white bg-opacity-25 text-gray-100 placeholder-gray-300"
const inputErrorStyle = "absolute -bottom-5 left-6 text-sm text-red-600 font-semibold"

const Authentication = (props) => {
    const [isSignUp, setIsSignUp] = useState(props.isSignUp ? props.isSignUp : true);
    const email = useInput({});
    const password = useInput({});
    const fname = useInput({});
    const lname = useInput({});
    const username = useInput({});
    const [isLoading, setIsLoading] = useState(false);
    const authCtx = useContext(AuthContext)

    const toggleForm = () => {
        setIsSignUp(prevState => !prevState);
    }

    const validate = () => {
        if (isSignUp) {
            return (fname.value.trim() && lname.value.trim() && username.value.trim() && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value) && password.value.trim())
        } else {
            return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value) && password.value.trim())
        }
    }

    const submitHandler = async (event) => {
        event.preventDefault();
        if (!validate()) return;
        setIsLoading(true)
        try {
            let data = await fetch(isSignUp ? signUpURL : signInURL, {
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
            authErrorHandler(e.error.message);
        }

        setIsLoading(false);
        email.setValue("");
        password.setValue("");
    }

    return (
        <div className="flex justify-center w-full h-screen text-gray-200 bg-gradient-to-br from-emerald-900 to-cyan-900">
            <form className="flex flex-col space-y-6 w-96 mt-32" onSubmit={submitHandler}>
                <h1 className="text-center text-3xl font-semibold my-4">{isSignUp ? "Don't have an account?" : "Have an Account?"}</h1>
                {isSignUp &&
                    <>
                        <div className='flex space-x-4'>
                            <div className='relative'>
                                {!false ? <span className={inputErrorStyle} >Error</span> : ""}
                                <input className={inputStyle} onChange={fname.onChange} value={fname.value} type="text" placeholder="First Name" name='fname' />
                            </div>
                            <div className='relative'>
                                {false ? <span className={inputErrorStyle} >Error</span> : ""}
                                <input className={inputStyle} onChange={lname.onChange} value={lname.value} type="text" placeholder="Last Name" name='lname' />
                            </div>
                        </div>
                        <div className='relative'>
                            {false ? <span className={inputErrorStyle} >Error</span> : ""}
                            <input className={inputStyle} onChange={username.onChange} value={username.value} type="text" placeholder="Username" name='username' />
                        </div>
                    </>
                }
                <div className='relative'>
                    {false ? <span className={inputErrorStyle} >Error</span> : ""}
                    <input className={inputStyle} onChange={email.onChange} value={email.value} type="text" placeholder="Email" name='email' />
                </div>
                <div className='relative'>
                    {false ? <span className={inputErrorStyle} >Error</span> : ""}
                    <input className={inputStyle} onChange={password.onChange} value={password.value} type="password" placeholder="Password" name='password' />
                </div>
                <Button className={"w-36 h-12 mx-auto font-semibold text-white bg-green-500 hover:bg-green-600 focus:bg-green-500"} type={"submit"} content={isLoading ? <Loader className="mx-auto w-5 animate-spin" /> : isSignUp ? "SIGN UP" : "SIGN IN"} />
                {isSignUp && <a href='./login' className="text-sm cursor-pointer">Forgot Password?</a>}
                <span>{isSignUp ? "Don't have an account?" : "Already have an account?"} <span className='cursor-pointer font-bold text-green-400' onClick={toggleForm}>{isSignUp ? "Sign In" : "Sign Up"}</span></span>
            </form>
        </div>
    )
}

export default Authentication
{/* <div className='h-3 text-center'><span class="font-medium text-center text-sm text-red-500">Your email is incorrect</span></div> */ }
{/* <a href='./login' className="text-sm cursor-pointer">Forgot Password?</a> */ }