export const setTheme = (theme = "light") => {
    let root = document.querySelector("#root");
    if (theme == "dark") root.classList.add("dark");
    else root.classList.remove("dark");
};
export const setDarkTheme = () => {
    let root = document.querySelector("#root");
    root.classList.add("dark");
};
export const setLightTheme = () => {
    let root = document.querySelector("#root");
    root.classList.remove("dark");
};
export const toggleTheme = () => {
    let root = document.querySelector("#root");
    if (root.classList.contains("dark")) root.classList.remove("dark");
    else root.classList.add("dark");
};
