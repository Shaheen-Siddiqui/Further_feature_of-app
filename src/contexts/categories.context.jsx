import { createContext, useEffect, useState } from 'react';

import { getCategoriesAndDocument } from "../utils/firebase/firebase.utils";


export const CategoriesContext = createContext({ categoriesMap: {}, })

export const CategoriesProvider = ({ children }) => {
    const [categoriesMap, setCategoriesMap] = useState({});

    useEffect(() => {
        async function categoriesMapValue() {
            const categoriesMap = await getCategoriesAndDocument();
            setCategoriesMap(categoriesMap);
        }
        categoriesMapValue();
    }, []);


    const value = { categoriesMap };
    return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
}





