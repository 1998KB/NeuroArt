import React, {useEffect, useState} from 'react';
import "./Form.css"
import Dropdown from "../dropdown/Dropdown";

interface FormProps {
    setPrompt: Function
    isLoading: boolean
}

const Form = (props: FormProps) => {
    const [generateClicked, setGenerateClicked] = useState<boolean>(true);

    const handleGenerated = () => {
        setGenerateClicked(false)
        setGenerateClicked(true);
    };

    return (
        <div>
            <form>
                {generateClicked ? (
                    <Dropdown
                        setGenerated={handleGenerated}
                        setPrompt={props.setPrompt}
                        isLoading={props.isLoading}
                    />
                ) : (
                    <Dropdown
                        setGenerated={handleGenerated}
                        setPrompt={props.setPrompt}
                        isLoading={props.isLoading}
                    />
                )}
            </form>
        </div>
    );
};

export default Form;
