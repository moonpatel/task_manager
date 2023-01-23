import { getFirestore, getDoc, doc } from "@firebase/firestore";
import { fetchFromLocalStorage, storeInLocalStorage } from "../localStorage/localStorage";

const db = getFirestore();

function setTasksState(allTasks, setTodo, setInProgress, setCompleted) {
    let todoTasks = allTasks.filter((elem) => elem.type == "TO_DO");
    let inProgressTasks = allTasks.filter((elem) => elem.type == "IN_PROGRESS");
    let completedTasks = allTasks.filter((elem) => elem.type == "COMPLETED");

    setTodo([...todoTasks]);
    setInProgress([...inProgressTasks]);
    setCompleted([...completedTasks]);
}

async function fetchTasksFromFirestore(pid) {
    const project = await getDoc(doc(db, "projects", pid));
    let data = project.data().tasks;
    let allTasks = [];
    for (let taskid of data) {
        let task = await getDoc(doc(db, "tasks", taskid));
        allTasks.push(task.data());
    }
    return allTasks;
}

async function fetchTasks(pid, setTodo, setInProgress, setCompleted) {
    if (!(localStorage.getItem(pid) == "undefined") && !localStorage.getItem(pid)) {
        fetchTasksFromFirestore(pid);
        let allTasks = await fetchTasksFromFirestore(pid);
        storeInLocalStorage(pid, allTasks);
        setTasksState(allTasks, setTodo, setInProgress, setCompleted);
    } else {
        setTasksState(fetchFromLocalStorage(pid), setTodo, setInProgress, setCompleted);
    }
}

export { fetchTasks };
