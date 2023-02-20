import React from 'react';
import { useNavigate } from 'react-router-dom';
import { DirectoryItemContainerSty, BackgroungImageSty, BodySty } from './directory-item.style.jsx';


const DirectoryItemComponent = ({ item: { title, imageUrl, route } }) => {
    const navigate = useNavigate();

    const DirectoryNavigate=()=> {
        navigate(route)
    }
    return (
        <DirectoryItemContainerSty onClick={DirectoryNavigate}>
            <BackgroungImageSty imageUrl={imageUrl} />
            <BodySty>
                <h2>{title}</h2>
                <p>shop now... </p>
            </BodySty>
        </DirectoryItemContainerSty >


    );
}
export default DirectoryItemComponent;
