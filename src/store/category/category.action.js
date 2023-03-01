import { ActionCreater } from "../../utils/reducer/reducer.utils";

export const categoryAction = (categoriesMap) => ActionCreater('SET_CATEGORY', categoriesMap)