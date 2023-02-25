
const INITIAL_STATE = {
    isCartOpen: false,
    cartItems: [],
    // cartCount: 0,
    // cartTotal: 0,
}
export const cartReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;
    console.log(payload, 'okay');
    switch (type) {
        case 'SET_CART_ITEMS':
            return {
                ...state,
                cartItems: payload
            }
        case 'IS_CART_OPEN':
            return {
                ...state,
                isCartOpen: payload
            }

        default:
            return state;
    }
}