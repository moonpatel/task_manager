import React, { useContext } from "react";
import Authentication from "./components/auth/Authentication";
import MainSection from "./components/MainSection";
import SideBar from "./components/SideBar";
import AuthContext from "./context/auth-context";

function App() {
    const authCtx = useContext(AuthContext);
    console.log(authCtx.token,authCtx.email);

    return (
        <React.Fragment>
            {authCtx.isLoggedIn ? (
                <>
                    <SideBar />
                    <MainSection />
                </>
            ) : (
                <Authentication authCtx={authCtx} />
            )}
        </React.Fragment>
    );
}

export default App;
