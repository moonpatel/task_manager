import React, { useContext, useEffect } from "react";
import Authentication from "./components/auth/Authentication";
import MainSection from "./components/MainSection";
import SideBar from "./components/SideBar";
import AuthContext from "./context/auth-context";
import { setTheme } from "./utilities/setTheme";

function App() {
    useEffect(() => {
        if(localStorage.getItem('theme')==='undefined')
        localStorage.setItem('theme','light');
        setTheme()
    }, []);
    const authCtx = useContext(AuthContext);

    return (
        <React.Fragment>
            {authCtx.isLoggedIn ? (
                <>
                    <SideBar />
                    <MainSection />
                </>
            ) : (
                <Authentication isSignUp={true} />
            )}
        </React.Fragment>
    );
}

export default App;
