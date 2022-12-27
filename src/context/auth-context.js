import React, { useState } from "react";

const AuthContext = React.createContext({
    isLoggedIn: false,
    login: () => {},
    logout: () => {},
});

export const AuthContextProvider = (props) => {
    const [token, setToken] = useState(null);
    const isLoggedIn = token ? true : false;

    const login = (data) => {
        setToken(data.token);
        localStorage.setItem("token", data.idToken);
        localStorage.setItem("email", data.email);
    };

    const logout = () => {
        setToken(null);
        localStorage.removeItem("token");
        localStorage.removeItem("email");
    };

    return <AuthContext.Provider value={{ isLoggedIn, login, logout }}>{props.children}</AuthContext.Provider>;
};

export default AuthContext;
