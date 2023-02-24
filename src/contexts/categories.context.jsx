import { createContext, useEffect, useReducer } from 'react';
import { getCategoriesAndDocument } from "../utils/firebase/firebase.utils";
import { ActionCreater } from "../utils/reducer/reducer.utils";

export const CategoriesContext = createContext({ categoriesMap: {}, })

const reducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'SET_CATEGORY':
            return {
                ...state,
                categoriesMap: payload
            }
        default:
            throw new Error(`unhavdled type ${type} check reducerFunction`)
    }
}
const initialState = {
    categoriesMap: {},
}
export const CategoriesProvider = ({ children }) => {
    const [{ categoriesMap }, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        async function categoriesMapValue() {
            const categoriesMap = await getCategoriesAndDocument();
            dispatch(ActionCreater('SET_CATEGORY', categoriesMap));
        }
        categoriesMapValue();
    }, []);


    const value = { categoriesMap };
    return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
}





