import React, { useContext } from "react";
import Authentication from "./components/auth/Authentication";
import MainSection from "./components/MainSection";
import SideBar from "./components/SideBar";
import Modal, { BackDrop } from "./components/UI/Modal";
import AuthContext from "./context/auth-context";

function App() {
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
