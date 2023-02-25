
const initialState = {
    categories: [],
}
export const categoriesReducer = (state = initialState, action={}) => {
    const { type, payload } = action;
    switch (type) {
        case 'SET_CATEGORY':
            return {
                ...state,
                categories: payload
            }
        default:
            return state
    }
}
