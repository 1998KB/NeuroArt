import React, {useState} from 'react';
import "./ImageContainer.css"
import LoadingSpinner from "../loadingSpinner/LoadingSpinner";
import {ImageContainerProps, ImageSaveData} from "../../interfaces";
import {isDisabled} from "@testing-library/user-event/dist/utils";
const ImageContainer = (props: ImageContainerProps) => {


    let save: ImageSaveData;

    const handleSave = async () => {
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
    }

    save = {
        temporaryUrl: props.image,
        prompt: props.prompt,
        title: props.inputTitle,
        description: props.inputDescription
    }
    return (
        <div>
            {props.isLoading ? <LoadingSpinner/> : <img src={props.image}/> }
            {props.image &&
                <>
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
