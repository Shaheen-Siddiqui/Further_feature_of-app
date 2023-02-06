import React, { useContext } from 'react';
import { productsContext } from '../../contexts/products.context';
import ProductCard from '../../components/product-card/product-card.component'
import './shop.style.scss'
const Shop = () => {
    const { products } = useContext(productsContext)
    return (
        <div className='products-container'>
            {
                products.map((products) => {
                    return <ProductCard key={products.id} products={products} />
                })
            }
        </div>
    )
}

export default Shop
