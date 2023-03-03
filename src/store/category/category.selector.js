import { createSelector } from "reselect";


const selectCategoryReducer = (state) => state.category


export const selectCategories = createSelector(
    [selectCategoryReducer],
    (categoriesSlice) => categoriesSlice.categoriesMap

);

export const categoriesMapSelector = createSelector(
    [selectCategories],
    (categoriesMap) =>
        categoriesMap.reduce((acc, docSnapshot) => {
            const { title, items } = docSnapshot
            acc[title.toLowerCase()] = items;
            return acc;
        }, {})

)

