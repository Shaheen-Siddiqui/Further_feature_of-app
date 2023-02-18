import React from 'react';
import "./category-preview.styles.scss"
import ProductCard from "../product-card/product-card.component";
import {Link} from 'react-router-dom'

const CategoryPreview = ({ products, title }) => {

  return (
    <div className='category-preview-container'>
      <h2>
      <Link className='title' to={title}>{title}</Link>
      </h2>
      <div className="preview">
        {
          products.filter((_, index) => index < 4).map((products) => {
            return <ProductCard key={products.id} products={products} />
          })
        }
      </div>
    </div>
  )
}

export default CategoryPreview;
