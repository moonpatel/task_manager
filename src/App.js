import React, { useContext, useEffect } from "react";
import Authentication from "./components/auth/Authentication";
import Projects from "./pages/Projects";
import SideBar from "./components/SideBar";
import AuthContext from "./context/auth-context";
import { setTheme } from "./utilities/setTheme";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Chats from "./pages/Chats";
import Settings from "./pages/Settings";
import Stats from "./pages/Stats";
import Calendar from "./pages/Calendar";

function App() {
    useEffect(() => {
        if (localStorage.getItem("theme") === "undefined") localStorage.setItem("theme", "light");
        setTheme();
    }, []);
    const authCtx = useContext(AuthContext);

    return (
        <React.Fragment>
            <Routes>
                <Route path="/" element={<Layout content={<Projects />} />} />
                <Route path="/home" element={<Layout content={<Home />} />} />
                <Route path="/stats" element={<Layout content={<Stats />} />} />
                <Route path="/projects" element={<Layout content={<Projects />} />} />
                <Route path="/chat" element={<Layout content={<Chats />} />} />
                <Route path="/calendar" element={<Layout content={<Calendar />} />} />
                <Route path="/settings" element={<Layout content={<Settings />} />} />

                <Route path="/signup" element={<Authentication isSignUp={true} />} />
                <Route path="/signin" element={<Authentication isSignUp={false} />} />

                <Route path="*" element={"page not found"} />
            </Routes>
        </React.Fragment>
    );
}

export default App;
