import React from 'react';
import ProductCard from "../product-card/product-card.component";
import { Preview,Title, CategoryPreviewContainer } from "./category-preview.styles";

const CategoryPreview = ({ products, title }) => {
  return (

    <CategoryPreviewContainer>
    <h2>
      <Title to={title}>{title.toUpperCase()}</Title>
    </h2>
    <Preview>
        {
          products.filter((_, index) => index < 4).map((products) => {
            return <ProductCard key={products.id} products={products} />
          })
        }
        </Preview>
    </CategoryPreviewContainer>
  )
}

export default CategoryPreview;
