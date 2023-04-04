import React from 'react';
import "./ImageInfo.css";


type Props = {
    title: string,
    description: string
}

const ImageInfo = ({ title, description }: Props) => {
    return (
        <div className='image-info'>
            <h3>Title: {title}</h3>
            <h4>Description: {description}</h4>
        </div>
    );
};

export default ImageInfo;

