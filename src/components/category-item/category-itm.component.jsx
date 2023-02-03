import React from 'react';
import './category-item.style.scss';

const CategoryItmComponent = ({ item: { title, imageUrl } }) => {
    return (
        <div className="category-container">
            <div className='background-image' style={{ backgroundImage: `url(${imageUrl})`, }} />
            <div className="category-body-container">
                <h2>{title}</h2>
                <p>nothind... </p>
            </div>
        </div>


    );
}
export default CategoryItmComponent;
