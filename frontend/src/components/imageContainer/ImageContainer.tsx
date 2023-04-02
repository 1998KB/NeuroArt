import React from 'react';
import "./ImageContainer.css"
import LoadingSpinner from "../loadingSpinner/LoadingSpinner";
import {ImageContainerProps, ImageSaveData} from "../../interfaces";

const ImageContainer = (props: ImageContainerProps) => {

    const handleSave = async () => {
        if (props.credentials == null) {
            return;
        }
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
                headers: {'content-type': 'application/json',
                    'Authorization': `Bearer ${props.credentials.credential}`},
                body: JSON.stringify(save),
            }
        )
        if (!response.ok) {
            throw new Error(`Failed to save: ${response.status}`);
        }
        props.setIsDisabled(false);
    }

    return (
        <div className='imagecontainer'>
            {props.isLoading && <LoadingSpinner/>}
            {props.image &&
                <>
                    <div className="imagecontainer__generated-image-div">
                        <img className='imagecontainer__generated-image' src={props.image}/>
                    </div>
                    <div className="imagecontainer__input-div">
                        <label className="add-title-label">Add Title: </label>
                        <input type="text"
                               className="imagecontainer__title-input"
                               placeholder='Add a title'
                               value={props.inputTitle}
                               onChange={(e) => props.setInputTitle(e.target.value)}
                        />
                        <label htmlFor="" className="add-description-label">Add Description</label>
                        <input type="text"
                               className="imagecontainer__description-input"
                               placeholder='Add a description'
                               value={props.inputDescription}
                               onChange={(e) => props.setInputDescription(e.target.value)}
                        />
                        <button className="imagecontainer__save-btn" onClick={handleSave} disabled={props.isDisabled}>Save</button>
                    </div>
                </>
            }
        </div>
    );
};

export default ImageContainer;
