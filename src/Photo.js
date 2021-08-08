import React from 'react';
import "./index.css"

const Photo = ({
    urls: {regular},
    alt_description,
    likes
}) => {
    return (
        <div className="photo">
            <img src={regular} alt={alt_description} />
        </div>
    );
}

export default Photo;
