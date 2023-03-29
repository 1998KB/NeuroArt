import React from 'react';
import "./ImageContainer.css"

interface ImageContainerProps {
    image: string
}

const ImageContainer = (props: ImageContainerProps) => {
    return (
        <div>
            <img src={props.image}/>
            <p>Image Container</p>
        </div>
    );
};

export default ImageContainer;
