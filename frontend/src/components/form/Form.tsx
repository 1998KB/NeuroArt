import React, {useEffect, useState} from 'react';
import "./Form.css"
import Dropdown from "../dropdown/Dropdown";

interface FormProps {
    setPrompt: Function
    isLoading: boolean,
    setIsDisable: Function
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
                        setIsDisabled={props.setIsDisable}


                    />
                ) : (
                    <Dropdown
                        setGenerated={handleGenerated}
                        setPrompt={props.setPrompt}
                        isLoading={props.isLoading}
                        setIsDisabled={props.setIsDisable}
                    />
                )}
            </form>
        </div>
    );
};

export default Form;
