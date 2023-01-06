import React from "react";
import Authentication from "./components/auth/Authentication";
import Projects from "./pages/Projects";

import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Chats from "./pages/Chats";
import Settings from "./pages/Settings";
import Stats from "./pages/Stats";
import Calendar from "./pages/Calendar";

function App() {

    return (
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
    );
}

export default App;
