import React, {useEffect, useState} from 'react';
import './Form.css';
import Dropdown from '../dropdown/Dropdown';

interface FormProps {
    setPrompt: Function;
    isLoading: boolean;
    setIsDisable: Function;
    setGeneratedImage: Function;
    setInputTitle: Function
    setInputDescription: Function
}

const Form = (props: FormProps) => {
    const [key, setKey] = useState<number>(0);

    const handleGenerated = () => {
        setKey((prevKey) => prevKey + 1);
    };

    return (
        <div>
            <form>
                <Dropdown
                    key={key}
                    setInputTitle={props.setInputTitle}
                    setInputDescription={props.setInputDescription}
                    setGenerated={handleGenerated}
                    setPrompt={props.setPrompt}
                    isLoading={props.isLoading}
                    setIsDisabled={props.setIsDisable}
                    setGeneratedImage={props.setGeneratedImage}
                />
            </form>
        </div>
    );
};

export default Form;
