import { getDocs, getFirestore, query, collection, where, addDoc } from "firebase/firestore";
import { fetchFromLocalStorage, updateLocalStorage, storeInLocalStorage } from "../localStorage/localStorage";

const db = getFirestore();

async function fetchProjectsFromFirestore(displayName) {
    // Schema of project document.
    // project: head(owner name),name(project name),tasks(tasks in the project)
    const q = query(collection(db, "projects"), where("head", "==", displayName)); // get all projects of current user
    let querySS = await getDocs(q);
    let fetchedProjects = querySS.docs.map((doc) => {
        let newDoc = doc.data();
        newDoc.pid = doc.id;
        return newDoc;
    });
    storeInLocalStorage("projects", fetchedProjects);
    return fetchedProjects;
}

function updateProjectsInLocalStorage(newData) {
    let localProjects = fetchFromLocalStorage("projects");
    localProjects.push(newData);
    updateLocalStorage("projects", localProjects);
}

function fetchProjects(displayName, setProjects) {
    if (!(localStorage.getItem("projects") == "undefined") && !localStorage.getItem("projects")) {
        fetchProjectsFromFirestore(displayName).then((fetchedProjects) => {
            setProjects([...fetchedProjects]);
        });
    } else {
        setProjects([...fetchFromLocalStorage("projects")]);
    }
}

async function createProjectInFirestore(project, displayName, setProjects) {
    const q = query(collection(db, "projects"), where("name", "==", project.name));
    const querySS = await getDocs(q);

    if (querySS.empty) {
        let projectObj = { name: project.name, head: displayName };
        const docRef = await addDoc(collection(db, "projects"), projectObj);
        console.log("New project created with id", docRef);
        projectObj.pid = docRef.id;
        setProjects((prev) => [...prev, projectObj]); // AVOID MUTATION OF ARRAY IN A STATE AT ALL COSTS. USE SPREADING(...arr) OR concat()

        updateProjectsInLocalStorage(projectObj);
    } else {
        console.log("Project already exists");
    }
}

export { fetchProjects, createProjectInFirestore };
