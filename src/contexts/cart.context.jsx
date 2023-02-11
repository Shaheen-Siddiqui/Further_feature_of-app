import { createContext, useEffect, useState } from "react";


const addCartItem = (cartItems, productToAdd) => {
    const trueCardsItems = cartItems.find((itemsOfCart) => itemsOfCart.id === productToAdd.id);
    if (trueCardsItems) {
        return cartItems.map((itemsOfCart) => itemsOfCart.id === productToAdd.id ? { ...itemsOfCart, Quantity: itemsOfCart.Quantity + 1 } : itemsOfCart);
    }
    return [...cartItems, { ...productToAdd, Quantity: 1 }]

};

export const CartContext = createContext({

    isCartOpen: false,
    setIsCartOpen: () => { },
    cartItems: [],
    addItemToCart: () => { },
    cartCount: 0,
});

export const CartProvider = ({ children }) => {

    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItem] = useState([])
    const [cartCount, setCartCount] = useState(0);


    useEffect(() => {
        const cartTotalItem = cartItems.reduce((total, cartItems) => total + cartItems.Quantity, 0);
        setCartCount(cartTotalItem);
    }, [cartItems]);


    const addItemToCart = (productToAdd) => {
        setCartItem(addCartItem(cartItems, productToAdd));
    }
    const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems, cartCount };
    return <CartContext.Provider value={value}>{children} </CartContext.Provider>
};

