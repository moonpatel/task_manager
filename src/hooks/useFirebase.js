import React, { useContext } from "react";
import FirebaseContext from "../context/firebase-context";

export const useFirebase = () => {
    const firebaseCtx = useContext(FirebaseContext);
    return firebaseCtx.app;
};
