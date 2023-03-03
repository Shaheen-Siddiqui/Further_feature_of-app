import CategoryPreview from "../../components/categories-preview/category-priview.component";
import { categoriesMapSelector } from "../../store/category/category.selector";
import { useSelector } from "react-redux";


const CategoriesPreview = () => {
    const categoriesMap = useSelector(categoriesMapSelector)

    return (
        <>
            {
                Object.keys(categoriesMap).map((title) => {
                    const products = categoriesMap[title];
                    return <CategoryPreview key={title} title={title} products={products} />
                })
            }
        </>
    )
}

export default CategoriesPreview;


