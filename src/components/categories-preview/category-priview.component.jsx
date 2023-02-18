import React from 'react';
import { CategoryPreviewContainerSty, TitleSty, PreviewSty } from "./category-preview.styles"
import ProductCard from "../product-card/product-card.component";

const CategoryPreview = ({ products, title }) => {

  return (
    <CategoryPreviewContainerSty>
      <h2>
        <TitleSty className='title' to={title}>{title}</TitleSty>
      </h2>
      <PreviewSty>
        {
          products.filter((_, index) => index < 4).map((products) => {
            return <ProductCard key={products.id} products={products} />
          })
        }
      </PreviewSty>
    </CategoryPreviewContainerSty>
  )
}

export default CategoryPreview;
