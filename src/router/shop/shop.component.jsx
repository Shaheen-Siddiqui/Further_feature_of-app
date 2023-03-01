import { Routes, Route } from 'react-router-dom';
import CategoriesPreview from '../categories-preview/categories-preview.component'
import Category from "../category/category.component";
import { getCategoriesAndDocument } from "../../utils/firebase/firebase.utils";
import { categoryAction } from "../../store/category/category.action";
import { useEffect } from "react";
import { useDispatch } from "react-redux";



const Shop = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        const categoriesMapValue = async () => {
            const categoriesMap = await getCategoriesAndDocument();
            dispatch(categoryAction(categoriesMap))
        }
        categoriesMapValue();
    }, []);

    return (
        <>
            <Routes>
                <Route index element={<CategoriesPreview />} />
                <Route path=':category' element={<Category />} />
            </Routes>
        </>
    )
}

export default Shop;
