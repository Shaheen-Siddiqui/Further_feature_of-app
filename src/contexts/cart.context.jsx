import { createContext, useEffect, useState } from "react";


const addCartItem = (cartItems, productToAdd) => {
    const trueCardsItems = cartItems.find((itemsOfCart) => itemsOfCart.id === productToAdd.id);
    if (trueCardsItems) {
        return cartItems.map((itemsOfCart) => itemsOfCart.id === productToAdd.id ? { ...itemsOfCart, Quantity: itemsOfCart.Quantity + 1 } : itemsOfCart);
    }
    return [...cartItems, { ...productToAdd, Quantity: 1 }];

};

const removeCartItem = (cartItems, cartItemToRemove) => {
    const trueCardsItems = cartItems.find((itemsOfCart) => itemsOfCart.id === cartItemToRemove.id);

    if (trueCardsItems.Quantity === 1) {
        return cartItems.filter((itemsOfCart) => itemsOfCart.id !== cartItemToRemove.id);
    }

    return cartItems.map((itemsOfCart) => itemsOfCart.id === cartItemToRemove.id ? { ...itemsOfCart, Quantity: itemsOfCart.Quantity - 1 } : itemsOfCart);
};

const clearCartItem = (cartItems, cartItemToClear) => {
    return cartItems.filter((itemsOfCart) => itemsOfCart.id !== cartItemToClear.id);
}

export const CartContext = createContext({

    isCartOpen: false,
    setIsCartOpen: () => { },
    cartItems: [],
    addItemToCart: () => { },
    cartCount: 0,
    removeItemToCart: () => { },
    cartTotal: 0,
    clearItemFromCart: () => { },
});

export const CartProvider = ({ children }) => {

    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartCount, setCartCount] = useState(0);
    const [cartItems, setCartItem] = useState([]);
    const [cartTotal, setCartTotal] = useState(0);


    useEffect(() => {
        const cartTotalItem = cartItems.reduce((total, cartItems) => total + cartItems.Quantity, 0);
        setCartCount(cartTotalItem);
    }, [cartItems]);

    useEffect(() => {
        const newCartTotal = cartItems.reduce((total, cartItems) => total + cartItems.Quantity * cartItems.price, 0);
        setCartTotal(newCartTotal);
    }, [cartItems]);


    const addItemToCart = (productToAdd) => {
        setCartItem(addCartItem(cartItems, productToAdd));
    }

    const removeItemToCart = (cartItemToRemove) => {
        setCartItem(removeCartItem(cartItems, cartItemToRemove));
    }
    const clearItemFromCart = (cartItemToClear) => {
        setCartItem(clearCartItem(cartItems, cartItemToClear));
    }

    const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems, cartCount, removeItemToCart, clearItemFromCart,cartTotal };
    return <CartContext.Provider value={value}>{children} </CartContext.Provider>
};

