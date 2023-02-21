import { createContext, useEffect, useReducer } from "react";
import { onAuthStateChangedListener } from '../utils/firebase/firebase.utils'
import { ActionCreater } from '../utils/reducer/reducer.utils'


export const userContext = createContext({
    currentUser: null,
    setCurrentUser: () => null
});

// const CASE_TYPE = { 'SET_CURRENT_USER': 'SET_CURRENT_USER' }

const userReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'SET_CURRENT_USER':
            return {
                ...state,
                currentUser: payload,
            }

        default:
            throw new Error`unhandled type ${type} Error`}}

const initialState = { currentUser: null }
export const UserProvider = ({ children }) => {
    const [{ currentUser }, dispatch] = useReducer(userReducer, initialState);

    const setCurrentUser = (user) => {
        dispatch(ActionCreater('SET_CURRENT_USER',user) )
    }
    const value = { currentUser, setCurrentUser }

    useEffect(() => {
        const subscribe = onAuthStateChangedListener((user) => {
        })
        return subscribe;
    }, [])

    return <userContext.Provider value={value}>{children}</userContext.Provider>
}
