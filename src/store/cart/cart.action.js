import { ActionCreater } from "../../utils/reducer/reducer.utils";


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


//helper functions...^^




export const addItemToCart = (cartItems, productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd)
    return ActionCreater('SET_CART_ITEMS',newCartItems)
}

export const removeItemToCart = (cartItems, cartItemToRemove) => {
    const newCartItems = removeCartItem(cartItems, cartItemToRemove)
    return ActionCreater('SET_CART_ITEMS',newCartItems)
}
export const clearItemFromCart = (cartItems, cartItemToClear) => {
    const newCartItems = clearCartItem(cartItems, cartItemToClear)
    return ActionCreater('SET_CART_ITEMS',newCartItems)
}
export const setIsCartOpen = (boolien) => ActionCreater('IS_CART_OPEN', boolien)
