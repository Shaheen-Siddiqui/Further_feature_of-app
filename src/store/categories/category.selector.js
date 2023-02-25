import { createSelector } from "reselect";


const selectCategoryReducer = (state) => state.category;

export const selectCategories = createSelector(
    [selectCategoryReducer],
    (categorySlice) => categorySlice.categories
)


export const categoriesMapSelector = createSelector(
    [selectCategories],
    (categories) =>
        categories
            .reduce((acc, category) => {
                const { title, items } = category
                acc[title.toLowerCase()] = items;
                return acc;
            }, {}))
