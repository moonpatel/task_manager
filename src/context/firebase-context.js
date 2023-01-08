import React from "react";
import { initializeApp } from "firebase/app";

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

const FirebaseContext = React.createContext({
    app: null,
});

export const FirebaseContextProvider = (props) => {
    const app = initializeApp(firebaseConfig);
    return <FirebaseContext.Provider value={app}>{props.children}</FirebaseContext.Provider>;
};

export default FirebaseContext;
