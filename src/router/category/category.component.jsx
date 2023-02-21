import React, { useContext, useEffect, useState } from 'react';
import { CategoriesContext } from '../../contexts/categories.context'
import ProductCard from "../../components/product-card/product-card.component";
import { useParams } from 'react-router-dom';
import "./category.style.scss"

const Category = () => {
    const { categoriesMap } = useContext(CategoriesContext);
    const [products, setProduct] = useState(categoriesMap[category])
    const { category } = useParams()
    const [products, setProduct] = useState(categoriesMap[category])

    useEffect(() => {
        setProduct(categoriesMap[category]);
    }, [categoriesMap, category])


    return (
        <>
            <h3 className='titles'>{category.toLocaleUpperCase()}</h3>
            <div className='category-container'>

                {products &&
                    products.map((products) => {
                        return <ProductCard key={products.id} products={products} />
                    })
                }
            </div>
        </>
    )
};
export default Category
