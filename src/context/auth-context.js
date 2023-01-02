import React, { useState } from "react";

const AuthContext = React.createContext({
    token: null,
    isLoggedIn: false,
    login: () => {},
    logout: () => {},
});

export const AuthContextProvider = (props) => {
    const [token, setToken] = useState(
        localStorage.getItem("token") === "undefined" ? null : localStorage.getItem("token")
    );
    const [isLoggedIn, setIsLoggedIn] = useState(token ? true : false);

    const login = (data) => {
        setToken(data.token);
        setIsLoggedIn(true);
        localStorage.setItem("token", data.idToken);
        localStorage.setItem("email", data.email);
    };

    const logout = () => {
        setToken(null);
        setIsLoggedIn(false);
        localStorage.removeItem("token");
        localStorage.removeItem("email");
    };

    return <AuthContext.Provider value={{ token, isLoggedIn, login, logout }}>{props.children}</AuthContext.Provider>;
};

export default AuthContext;
