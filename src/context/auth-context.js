import React, { useContext, useState } from "react";
import {
    browserLocalPersistence,
    createUserWithEmailAndPassword,
    getAuth,
    getRedirectResult,
    GithubAuthProvider,
    GoogleAuthProvider,
    setPersistence,
    signInWithEmailAndPassword,
    signInWithPopup,
    signInWithRedirect,
    TwitterAuthProvider,
} from "firebase/auth";
import { initializeApp } from "@firebase/app";

const AuthContext = React.createContext({
    token: null,
    isLoggedIn: false,
    signup: async () => {},
    login: async () => {},
    logout: async () => {},
});

const firebaseConfig = {
    apiKey: "AIzaSyBnlosOl8gQRozpoQqgJwVYKY5bVOCMPJM",
    authDomain: "task-manager-43770.firebaseapp.com",
    databaseURL: "https://task-manager-43770-default-rtdb.firebaseio.com",
    projectId: "task-manager-43770",
    storageBucket: "task-manager-43770.appspot.com",
    messagingSenderId: "349292358097",
    appId: "1:349292358097:web:7e0b4f20632477ffd7d8f0",
    measurementId: "G-P6K08T64NV",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const AuthContextProvider = (props) => {
    const [user, setUser] = useState(
        localStorage.getItem("user") === "undefined" ? null : JSON.parse(localStorage.getItem("user"))
    );
    const [isLoggedIn, setIsLoggedIn] = useState(user ? true : false);

    const login = async (method = "EMAIL", data) => {
        let user = "";
        let provider = null;
        let result = null;
        switch (method) {
            case "EMAIL":
                await setPersistence(auth, browserLocalPersistence);
                result = await signInWithEmailAndPassword(auth, data.email, data.password);
                break;
            case "GOOGLE":
                provider = new GoogleAuthProvider();
                result = await signInWithPopup(auth, provider);
                break;
            case "GITHUB":
                provider = new GithubAuthProvider();
                result = await signInWithPopup(auth, provider);
                user = { displayName: result.user.displayName, email: result.user.email };
                break;
            case "TWITTER":
                provider = new TwitterAuthProvider();
                result = await signInWithPopup(auth, provider);
                break;
        }
        user = { displayName: result.user.displayName, email: result.user.email };
        setUser(user);
        setIsLoggedIn(true);
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("isLoggedIn", true);
    };

    const signup = async (data) => {
        await setPersistence(auth, browserLocalPersistence);
        let userCredentials = await createUserWithEmailAndPassword(auth, data.email, data.password);
        let user = { displayName: userCredentials.user.displayName, email: userCredentials.user.email };

        setUser(user);
        setIsLoggedIn(true);
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("isLoggedIn", true);
    };

    const logout = () => {
        setUser(null);
        setIsLoggedIn(false);
        localStorage.removeItem("user");
        localStorage.setItem("isLoggedIn", false);
    };

    return (
        <AuthContext.Provider value={{ app, isLoggedIn, signup, login, logout }}>{props.children}</AuthContext.Provider>
    );
};

export default AuthContext;
