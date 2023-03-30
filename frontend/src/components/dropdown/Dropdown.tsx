import React, {useRef, useState} from 'react';
import './Dropdown.css'
import Select, {CSSObjectWithLabel, OnChangeValue, OptionProps, Theme} from 'react-select';
import {options1, options2, options3, options4} from "./options";
import {DropdownProps, Option} from "../../interfaces";
import {customStyles, customTheme} from "./customsThemeAndStyle";


const Dropdown = (props: DropdownProps) => {
    const [lightingOption, setLightingOption] = useState<Option>({value: '', label: 'select'});
    const [styleOption, setStyleOption] = useState<Option>({value: '', label: 'select'});
    const [colorOption, setColorOption] = useState<Option>({value: '', label: 'select'});
    const [landscapeOption, setLandscapeOption] = useState<Option>({value: '', label: 'select'});
    const [userInput, setUserInput] = useState('');

    const handleReset = () => {
        setLightingOption(options1[0]);
        setStyleOption(options2[0]);
        setColorOption(options3[0]);
        setLandscapeOption(options4[0]);
        setUserInput('');
    };
    const handleChangeLighting = (event: OnChangeValue<unknown, false>) => {
        if (event) {
            setLightingOption(event as Option);
        }
    };
    const handleChangeStyle = (event: OnChangeValue<unknown, false>) => {
        if (event) {
            setStyleOption(event as Option);
        }
    };

    const handleChangeColor = (event: OnChangeValue<unknown, false>) => {
        if (event) {
            setColorOption(event as Option);
        }
    };
    const handleChangeLandscape = (event: OnChangeValue<unknown, false>) => {
        if (event) {
            setLandscapeOption(event as Option);
        }
    };
    const makePrompt = () => {
        let prompt: string = userInput;
        if (lightingOption.value !== '') {
            prompt = [prompt, lightingOption.value].join(' ').toString()
        }
        if (styleOption.value !== '') {
            prompt = [prompt, styleOption.value].join(' ').toString()
        }

        if (colorOption.value !== '') {
            prompt = [prompt, colorOption.value].join(' ').toString()
        }
        if (landscapeOption.value !== '') {
            prompt = [prompt, landscapeOption.value].join(' ').toString()
        }
        return prompt;
    }
    const handleGenerate = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        props.setIsDisabled(false)
        let promptMade = makePrompt()
        if (promptMade) {
             props.setPrompt(promptMade)
        }
        props.setGeneratedImage(null)
        props.setGenerated(true)
        handleReset();
    }
    const handleUserInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserInput(event.target.value);
    }

    return (
        <div>
            <label>Select Lighting:</label>
            <Select theme={customTheme}
                    styles={customStyles}
                    className='dropdown__select'
                    defaultValue={options1[0]}
                    options={options1}
                    onChange={(event) => handleChangeLighting(event)}
            />
            <label>Select Style:</label>
            <Select theme={customTheme}
                    styles={customStyles}
                    className='dropdown__select'
                    defaultValue={options2[0]}
                    options={options2}
                    onChange={(event) => handleChangeStyle(event)}
            />
            <label>Select Color:</label>
            <Select theme={customTheme}
                    styles={customStyles}
                    className='dropdown__select'
                    defaultValue={options3[0]}
                    options={options3}
                    onChange={(event) => handleChangeColor(event)}
            />
            <label>Select Landscape:</label>
            <Select theme={customTheme}
                    styles={customStyles}
                    className='dropdown__select'
                    defaultValue={options4[0]}
                    options={options4}
                    onChange={(event) => handleChangeLandscape(event)}
            />
            <label>
                Text input: <input type="text" onChange={event => handleUserInput(event)}/>
            </label>
            <button onClick={event => handleGenerate(event)} disabled={props.isLoading}>Generate</button>
        </div>
    );
};

export default Dropdown;
