import React from 'react';
import './directory-item.style.scss';

const DirectoryItemComponent = ({ item: { title, imageUrl } }) => {
    return (
        <div className="directory-item-container">
            <div className='background-image' style={{ backgroundImage: `url(${imageUrl})`, }} />
            <div className="body">
                <h2>{title}</h2>
                <p>nothind... </p>
            </div>
        </div>


    );
}
export default DirectoryItemComponent;
