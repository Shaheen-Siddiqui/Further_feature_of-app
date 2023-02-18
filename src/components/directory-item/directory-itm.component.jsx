import React from 'react';
import {DirectoryItemContainerSty,BackgroungImageSty,BodySty} from'./directory-item.style.jsx';

const DirectoryItemComponent = ({ item: { title, imageUrl } }) => {
    return (
        <DirectoryItemContainerSty>
            <BackgroungImageSty imageUrl={imageUrl} />
            <BodySty>
                <h2>{title}</h2>
                <p>shop now... </p>
            </BodySty>
        </DirectoryItemContainerSty >


    );
}
export default DirectoryItemComponent;
