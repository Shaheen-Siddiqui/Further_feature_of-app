import React, { useContext, useEffect, useState } from 'react';
import ProductCard from "../../components/product-card/product-card.component";
import { useParams } from 'react-router-dom';
import "./category.style.scss"
import { categoriesMapSelector } from "../../store/categories/category.selector";
import { useSelector } from 'react-redux';

const Category = () => {
    const categoriesMap=useSelector(categoriesMapSelector)
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
