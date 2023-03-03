
const initialState = {
    categoriesMap: [],
}

export const categoryReducer = (state = initialState, action={}) => {
    const { type, payload } = action;
    switch (type) {
        case 'SET_CATEGORY':
            return {
                ...state,
                categoriesMap: payload
            }
        default:
            return state;
    }
}
