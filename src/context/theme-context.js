import React, { useState } from "react";

const ThemeContext = React.createContext({
    isDarkTheme: null,
    toggleTheme: null,
});

export const ThemeContextProvider = (props) => {
    const [isDarkTheme, setIsDarkTheme] = useState(
        "theme" in localStorage
            ? localStorage.getItem("theme") == "dark"
            : window.matchMedia("(prefers-color-scheme:dark)").matches
    );
    let root = document.querySelector("#root");
    !isDarkTheme ? root.classList.remove("dark") : root.classList.add("dark");

    const toggleTheme = () => {
        let root = document.querySelector("#root");
        localStorage.setItem("theme", isDarkTheme ? "light" : "dark");
        isDarkTheme ? root.classList.remove("dark") : root.classList.add("dark");
        setIsDarkTheme((prev) => !prev);
    };

    return (
        <ThemeContext.Provider value={{ isDarkTheme, setIsDarkTheme, toggleTheme }}>
            {props.children}
        </ThemeContext.Provider>
    );
};

export default ThemeContext;
