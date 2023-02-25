import {Routes,Route} from 'react-router-dom';
import CategoriesPreview from '../categories-preview/categories-preview.component'
import Category from "../category/category.component";
import { getCategoriesAndDocument } from "../../utils/firebase/firebase.utils";
import { setCategories } from "../../store/categories/category.action";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
const Shop = () => {
    const dispatch = useDispatch()


  useEffect(() => {
    async function categoriesMapValue() {
        const categoriesArray = await getCategoriesAndDocument();
        dispatch(setCategories(categoriesArray));
    }
    categoriesMapValue();
}, []);
    return (
        <>
        <Routes>
            <Route index element={<CategoriesPreview/>} />
            <Route path=':category' element={<Category/>} />
        </Routes>
        </>
    )
}

export default Shop;
