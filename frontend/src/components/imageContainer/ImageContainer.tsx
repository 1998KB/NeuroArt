import React from 'react';
import "./ImageContainer.css"
import LoadingSpinner from "../loadingSpinner/LoadingSpinner";
import {ImageContainerProps, ImageSaveData} from "../../interfaces";

const ImageContainer = (props: ImageContainerProps) => {



    const handleSave = async () => {
        const save: ImageSaveData = {
            temporaryUrl: props.image,
            prompt: props.prompt,
            title: props.inputTitle,
            description: props.inputDescription
        }
        props.setIsDisabled(true)
        const response = await fetch(
            "https://neuroart.azurewebsites.net/image",
            {
                method: 'POST',
                headers: {'content-type': 'application/json'},
                body: JSON.stringify(save),
            }
        )
        if (!response.ok) {
            throw new Error(`Failed to save: ${response.status}`);
        }
        props.setIsDisabled(false);
    }

    return (
        <div className='img-container'>
            {props.isLoading && <LoadingSpinner/>}
            {props.image &&
                <>
                    <img className='generated-image' src={props.image}/>
                    <label className="add-title-label">Add Title: </label>
                    <input type="text"
                           className="add-title"
                           value={props.inputTitle}
                           onChange={(e) => props.setInputTitle(e.target.value)}
                    />
                    <label htmlFor="" className="add-description-label">Add Description</label>
                    <input type="text"
                           className="add-description"
                           value={props.inputDescription}
                           onChange={(e) => props.setInputDescription(e.target.value)}
                    />
                    <button className="save-btn" onClick={handleSave} disabled={props.isDisabled}>Save</button>
                </>
            }
        </div>
    );
};

export default ImageContainer;
