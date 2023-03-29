import React from 'react';
import "./Form.css"
import Dropdown from "../dropdown/Dropdown";

interface FormProps {
    setPrompt: Function
    isLoading: boolean
}

const Form = (props : FormProps) => {

    return (
        <div>
            <form>
                <Dropdown setPrompt={props.setPrompt} isLoading={props.isLoading}/>
            </form>
        </div>
    );
};

export default Form;
