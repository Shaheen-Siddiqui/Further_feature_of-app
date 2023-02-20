import { createContext, useEffect, useState } from "react";
import {onAuthStateChangedListener} from '../utils/firebase/firebase.utils'

 
export const userContext = createContext({
    currentUser: null,
    setCurrentUser: () => null
});

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser }
    useEffect(() => {
        const subscribe = onAuthStateChangedListener((user) => {
        })
        return subscribe;
    }, [])

    return <userContext.Provider value={value}>{children}</userContext.Provider>
}
