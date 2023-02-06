import { createContext, useState } from 'react';
import ProductsData from '../shop-data.json';


export const productsContext = createContext({
    products: [],
})

export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState(ProductsData)
    const value = { products };
    return <productsContext.Provider value={value}>{children}</productsContext.Provider>
}





