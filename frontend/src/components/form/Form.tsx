import React from 'react';
import "./Form.css"
import Dropdown from "../dropdown/Dropdown";

interface FormProps {
    setPrompt: Function
}

const Form = (props : FormProps) => {

    return (
        <div>
            <form>
                <Dropdown setPrompt={props.setPrompt}/>
            </form>
        </div>
    );
};

export default Form;
