import React, { useContext } from "react";
import Authentication from "./components/auth/Authentication";
import Projects from "./pages/Projects";

import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Chats from "./pages/Chats";
import Settings from "./pages/Settings";
import Stats from "./pages/Stats";
import Calendar from "./pages/Calendar";
import Profile from "./pages/Profile";
import Logout from "./components/Logout";
import Modal from "./components/UI/Modal";
import AuthContext from "./context/auth-context";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

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
const db = getFirestore(app);

function App() {
    const authCtx = useContext(AuthContext);

    if (authCtx.isLoggedIn)
        return (
            <Routes>
                <Route path="/" element={<Layout content={<Projects />} />} />
                <Route path="/home" element={<Layout content={<Home />} />} />
                <Route path="/stats" element={<Layout content={<Stats />} />} />
                <Route path="/projects" element={<Layout content={<Projects />} />} />
                <Route path="/chat" element={<Layout content={<Chats />} />} />
                <Route path="/calendar" element={<Layout content={<Calendar />} />} />
                <Route path="/settings" element={<Layout content={<Settings />} />} />
                <Route path="/profile" element={<Layout content={<Profile />} />} />

                <Route
                    path="/logout"
                    element={
                        <Modal width="360px">
                            <Logout />
                        </Modal>
                    }
                />
                <Route path="/signin" element={<Navigate replace to="/projects" />} />
                <Route path="/signup" element={<Navigate replace to="/projects" />} />
                <Route path="*" element={"page not found"} />
            </Routes>
        );
    else
        return (
            <Routes>
                <Route path="/signup" element={<Authentication isSignUp={true} />} />
                <Route path="/signin" element={<Authentication isSignUp={false} />} />
                <Route path="*" element={<Navigate replace to="/signup" />} />
            </Routes>
        );
}

export default App;
