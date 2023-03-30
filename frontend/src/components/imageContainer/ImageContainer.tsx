import React from 'react';
import "./ImageContainer.css"
import LoadingSpinner from "../loadingSpinner/LoadingSpinner";

interface ImageContainerProps {
    image: string
    isLoading: boolean
}

const ImageContainer = (props: ImageContainerProps) => {
    return (
        <div>
            {props.image &&
                <>
                    <label className="add-title-label">Add Title: </label>
                    <input type="text" className="add-title"/>
                    <label htmlFor="" className="add-description-label">Add Description</label>
                    <input type="text" className="add-description"/>
                    <button className="save-btn">Save</button>
                </>
            }
            {props.isLoading ? <LoadingSpinner/> : <img src={props.image}/>}
        </div>
    );
};

export default ImageContainer;
