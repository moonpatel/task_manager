import React, { useContext, useState } from 'react'
import useInput from '../../hooks/useInput'
import AuthContext from '../../context/auth-context'
import Loader from '../UI/Loader'
import Button from '../UI/Button'
import authErrorHandler from '../../utilities/authErrorHandler'
import { ReactComponent as FacebookIcon } from '../../assets/svg/facebook.svg';
import { ReactComponent as GoogleIcon } from '../../assets/svg/google.svg';
import { ReactComponent as GithubIcon } from '../../assets/svg/github.svg';
import { ReactComponent as TwitterIcon } from '../../assets/svg/twitter.svg';

const inputStyle = "p-3 pl-6 w-full rounded-full outline-none bg-opacity-25 bg-white text-gray-100 placeholder-gray-400"

const Authentication = (props) => {
    const [isSignUp, setIsSignUp] = useState(props.isSignUp ? props.isSignUp : true);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const email = useInput({});
    const password = useInput({});
    const fname = useInput({});
    const lname = useInput({});
    const username = useInput({});
    const authCtx = useContext(AuthContext);

    const toggleForm = () => {
        setErrorMessage("");
        setIsSignUp(prevState => !prevState);
    }

    const validate = () => {
        if (isSignUp) {
            if (!fname.value.trim()) return "First name cannot be empty";
            if (!lname.value.trim()) return "Last name cannot be empty";
            if (!username.value.trim()) return "Username cannot be empty";
        }
        if (!email.value.trim()) return "Email cannot be empty";
        if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) return "Email is invalid";
        if (!password.value) return "Password cannot be empty";
        console.log(password.value.length)
        if (password.value.length < 8) return "Password is too short";
        return "VALID";
    }

    const submitHandler = async (event) => {
        event.preventDefault();
        let msg = validate();
        console.log(msg, errorMessage)
        if (errorMessage && errorMessage === msg) {
            return
        }
        else if (msg !== "VALID") {
            setErrorMessage(msg);
            return;
        }
        setIsLoading(true)
        try {
            let data = { email: email.value, password: password.value };
            if (isSignUp) {
                await authCtx.signup('EMAIL', data);
            } else {
                await authCtx.login('EMAIL', data);
            }
        } catch (e) {
            console.log(e)
            msg = authErrorHandler(e.error.message);
            console.log(msg)
            setErrorMessage(msg);
        }

        setIsLoading(false);
    }

    return (
        <div className="flex flex-col items-center w-full h-screen text-gray-200 bg-gradient-to-br from-emerald-900 to-cyan-900">
            <form className="flex flex-col space-y-4 w-96 mt-28" onSubmit={submitHandler}>
                <h1 className="text-center text-3xl font-semibold my-4">{isSignUp ? "Don't have an account?" : "Have an Account?"}</h1>
                {isSignUp &&
                    <>
                        <div className='flex space-x-4'>
                            <input className={inputStyle} onChange={fname.onChange} value={fname.value} autoComplete={"kjdsn"} type="text" placeholder="First Name" name='fname' />
                            <input className={inputStyle} onChange={lname.onChange} value={lname.value} type="text" placeholder="Last Name" name='lname' />
                        </div>
                        <input className={inputStyle} onChange={username.onChange} value={username.value} type="text" placeholder="Username" name='username' />
                    </>
                }
                <input className={inputStyle} onChange={email.onChange} value={email.value} type="text" placeholder="Email" name='email' />
                <input className={inputStyle} onChange={password.onChange} value={password.value} type="password" placeholder="Password" name='password' />

                {<span className="h-5 pl-6 text-sm text-red-600" >{errorMessage}</span>}
                <Button className={"w-36 mx-auto font-semibold text-white bg-green-500 hover:bg-green-600 active:bg-green-500"} type={"submit"} content={isLoading ? <Loader className="mx-auto w-5 animate-spin" /> : isSignUp ? "SIGN UP" : "SIGN IN"} />
                {/* {isSignUp && <a href='./login' className="text-sm cursor-pointer">Forgot Password?</a>} */}
                <span className='text-center'>{isSignUp ? "Don't have an account?" : "Already have an account?"} <span className='cursor-pointer font-bold text-green-400 hover:underline' onClick={toggleForm}>{isSignUp ? "Sign In" : "Sign Up"}</span></span>
            </form>
            <div className='flex items-center my-3 space-x-8'>
                <button onClick={() => authCtx.login('GOOGLE')}><GoogleIcon className='w-12' /></button>
                <button onClick={() => authCtx.login('GITHUB')}><GithubIcon className='w-12' /></button>
                <button onClick={() => authCtx.login('TWITTER')}><TwitterIcon className='w-14 h-14' /></button>
                <button onClick={() => { }} ><FacebookIcon /></button>
            </div>
        </div >
    )
}

export default Authentication