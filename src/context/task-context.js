import React, { useState } from "react";

const TaskContext = React.createContext([
    {
        title: "",
        body: "",
    },
]);

export const TaskContextProvider = (props) => {
    const [tasks, setTasks] = useState([{ title: "", body: "" }]);

    const addTask = (task) => {
        setTasks((prevState) => {
            prevState.push(task);
        });
    };

    return <TaskContext.Provider value={{tasks,addTask}}>{props.children}</TaskContext.Provider>;
};

export default TaskContext;
