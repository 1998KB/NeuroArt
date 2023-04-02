import React, {useEffect, useState} from 'react';
import "./Generate.css"
import Form from "../form/Form";
import ImageContainer from "../imageContainer/ImageContainer";
import {CredentialResponse} from "@react-oauth/google";
import {useNavigate} from "react-router-dom";

interface generateProps {
    credentials: CredentialResponse | null
}

const Generate = (props: generateProps) => {
    const [prompt, setPrompt] = useState<string>('');
    const [generatedImage, setGeneratedImage] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isDisabled, setIsDisabled] = useState<boolean>(false);
    const [inputTitle, setInputTitle] = useState("");
    const [inputDescription, setInputDescription] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        setPrompt('')
    }, [])

    useEffect(() => {
        if (prompt === '') {
            return;
        }
        handleGenerate();
    }, [prompt]);

    const handleGenerate = async () => {
        if (props.credentials == null) {
            navigate("/login");
            return;
        }
        setIsLoading(true)
        const response = await fetch(
            "https://neuroart.azurewebsites.net/generate",
            {
                method: 'POST',
                headers: {'content-type': 'text/plain',
                'authorization': `${props.credentials.credential}`},
                body: prompt,
            }
        )

        if (!response.ok) {
            throw new Error(`Failed to generate image: ${response.status}`);
        }

        const url = await response.text();
        setGeneratedImage(url);
        setIsLoading(false)
    };

    return (
        <div>
            <h1 className='heading'>Be Creative</h1>
            <p className="text">Explore your creativity. We provide different examples of options that you can set in order to translate your thoughts into art. All the examples are optional, but you can retrieve precise results if you define your preferences.
                Feel free to experiment with different options and see what kind of images you can create. You can save your favorite creations to your account.
                Start exploring today and see what you can create!</p>
            <Form setInputTitle={setInputTitle}
                  setInputDescription={setInputDescription}
                  setPrompt={setPrompt}
                  isLoading={isLoading}
                  setIsDisable={setIsDisabled}
                  setGeneratedImage={setGeneratedImage}/>
            <ImageContainer inputTitle={inputTitle}
                            setInputTitle={setInputTitle}
                            inputDescription={inputDescription}
                            setInputDescription={setInputDescription}
                            image={generatedImage}
                            isLoading={isLoading}
                            prompt={prompt}
                            isDisabled={isDisabled}
                            setIsDisabled={setIsDisabled}/>
        </div>
    );
};

export default Generate;
