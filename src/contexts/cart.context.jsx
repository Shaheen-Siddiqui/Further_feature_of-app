import { createContext, useReducer } from "react";
import { ActionCreater } from "../utils/reducer/reducer.utils";


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

const clearCartItem = (cartItems, cartItemToClear) => { return cartItems.filter((itemsOfCart) => itemsOfCart.id !== cartItemToClear.id); }

export const CartContext = createContext({
    setIsCartOpen: () => { },
    addItemToCart: () => { },
    removeItemToCart: () => { },
    clearItemFromCart: () => { },
    isCartOpen: false,
    cartItems: [],
    cartCount: 0,
    cartTotal: 0,
});

const INITIAL_STATE = {
    isCartOpen: false,
    cartItems: [],
    cartCount: 0,
    cartTotal: 0,
}
const cartReducer = (state, action) => {
    const { type, payload } = action;
    console.log(payload,'okay');
    switch (type) {
        case 'SET_CART_ITEMS':
            return {
                ...state,
                ...payload
            }
        case 'IS_CART_OPEN':
            return {
                ...state,
                isCartOpen: payload
            }

        default:
            throw new Error(`unhandled type ${type} check your cartReducer`)
    }
}
export const CartProvider = ({ children }) => {
    const [{ cartCount, cartItems, cartTotal, isCartOpen }, dispatch] = useReducer(cartReducer, INITIAL_STATE);

    const updateCartItemReducer = (newCartItems) => {
        const cartTotalItem = newCartItems.reduce((total, cartItems) => total + cartItems.Quantity, 0);
        const newCartTotal = newCartItems.reduce((total, cartItems) => total + cartItems.Quantity * cartItems.price, 0);
        dispatch(ActionCreater('SET_CART_ITEMS', { cartItems: newCartItems, cartTotal: newCartTotal, cartCount: cartTotalItem }));
    }

    const addItemToCart = (productToAdd) => {
        const newCartItems = addCartItem(cartItems, productToAdd)
        updateCartItemReducer(newCartItems)
    }

    const removeItemToCart = (cartItemToRemove) => {
        const newCartItems = removeCartItem(cartItems, cartItemToRemove)
        updateCartItemReducer(newCartItems)
    }
    const clearItemFromCart = (cartItemToClear) => {
        const newCartItems = clearCartItem(cartItems, cartItemToClear)
        updateCartItemReducer(newCartItems)
    }
    const setIsCartOpen = (boolien) => {
        dispatch(ActionCreater('IS_CART_OPEN', boolien))
    }

    const value = { 
        isCartOpen, cartItems, cartCount, cartTotal,
        addItemToCart,removeItemToCart, clearItemFromCart,setIsCartOpen  };
    return <CartContext.Provider value={value}>{children} </CartContext.Provider>
};


