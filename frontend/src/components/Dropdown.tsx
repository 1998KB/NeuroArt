import React, {useRef, useState} from 'react';
import '../stylesheets/Dropdown.css'
import Select, {CSSObjectWithLabel, OnChangeValue, OptionProps, Theme} from 'react-select';
import {options1, options2, options3, options4, options5} from "../Options";






interface Option {
    value: string,
    label: string
}

interface DropdownProps {
    setPrompt: Function

}

const Dropdown = (props : DropdownProps) => {
    let setPrompt = props.setPrompt;

    let lighting: string;
    let userInput: string;
    const handleChangeLighting = (event: OnChangeValue<unknown, false>) => {
        if (event) {
            lighting = (event as Option).value
        }
    };
    const handleGenerate = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        setPrompt(userInput + " " + lighting)
    }


    const handleUserInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        userInput = event.target.value;
    }

    const customTheme = (theme: Theme) => ({
        ...theme,
        borderRadius: 0,
        colors: {
            ...theme.colors,
            primary25: 'lightgrey',
            primary: 'black'
        }
    });

    const customStyles = {
        option: (baseStyle: CSSObjectWithLabel, state: OptionProps) => ({
            ...baseStyle,
            color: 'darkgrey'
        })
    };

    return (
        <div className='form-container'>
            <Select theme={customTheme}
                    styles={customStyles}
                    className='dropdown__select'
                    placeholder='Select Lighting ...'
                    options={options1}
                    autoFocus={true}
                    onChange={(event) => handleChangeLighting(event)}/>
            <Select theme={customTheme}
                    styles={customStyles}
                    className='dropdown__select'
                    placeholder='Select Style ...'
                    options={options2}
                    autoFocus={true}
                    onChange={(event) => handleChangeLighting(event)}/>
            <Select theme={customTheme}
                    styles={customStyles}
                    className='dropdown__select'
                    placeholder='Select Artist Style ...'
                    options={options3}
                    autoFocus={true}
                    onChange={(event) => handleChangeLighting(event)}/>
            <Select theme={customTheme}
                    styles={customStyles}
                    className='dropdown__select'
                    placeholder='Select Color ...'
                    options={options4}
                    autoFocus={true}
                    onChange={(event) => handleChangeLighting(event)}/>
            <Select theme={customTheme}
                    styles={customStyles}
                    className='dropdown__select'
                    placeholder='Select Landscape ...'
                    options={options5}
                    autoFocus={true}
                    onChange={(event) => handleChangeLighting(event)}/>

            <label>
                Text input: <input type="text" onChange={event => handleUserInput(event)}/>
            </label>
            <button onClick={event => handleGenerate(event)}>Generate</button>
        </div>
    );
};

export default Dropdown;
