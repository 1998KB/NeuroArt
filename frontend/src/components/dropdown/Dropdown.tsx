import React, {useRef, useState} from 'react';
import './Dropdown.css'
import Select, {CSSObjectWithLabel, OnChangeValue, OptionProps, Theme} from 'react-select';
import {options1, options2, options3, options4, options5} from "./options";
import {DropdownProps, Option} from "../../interfaces";


const Dropdown = (props: DropdownProps) => {
    let setPrompt = props.setPrompt;

    let lighting: string;
    let style: string;
    let artist: string;
    let color: string;
    let landscape: string;
    let userInput: string;
    // let prompt: string = '';



    const handleChangeLighting = (event: OnChangeValue<unknown, false>) => {
        if (event) {
            lighting = (event as Option).value
        }
    };
    const handleChangeStyle = (event: OnChangeValue<unknown, false>) => {
        if (event) {
            style = (event as Option).value
        }
    };
    const handleChangeArtist = (event: OnChangeValue<unknown, false>) => {
        if (event) {
            artist = (event as Option).value
        }
    };
    const handleChangeColor = (event: OnChangeValue<unknown, false>) => {
        if (event) {
            color = (event as Option).value
        }
    };

    const handleChangeLandscape = (event: OnChangeValue<unknown, false>) => {
        if (event) {
            landscape = (event as Option).value
        }
    };

    const makePrompt = () => {
        let prompt: string = userInput;

        if (lighting) {
            prompt = [prompt, lighting].join(' ').toString()
        }

        if (style) {
            prompt = [prompt, style].join(' ').toString()
        }
        if (artist) {
            prompt = [prompt, artist].join(' ').toString()
        }
        if (color) {
            prompt = [prompt, color].join(' ').toString()
        }
        if (landscape) {
            prompt = [prompt, landscape].join(' ').toString()
        }
        return prompt;
    }

    const handleGenerate = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        let promptMade = makePrompt()
        console.log(promptMade)
        // if (prompt){
        if (promptMade){
            console.log("in dropdown :" + promptMade)
            setPrompt(promptMade)
            console.log("after setting prompt")
        }
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
                    onChange={(event) => handleChangeStyle(event)}/>
            <Select theme={customTheme}
                    styles={customStyles}
                    className='dropdown__select'
                    placeholder='Select Artist Style ...'
                    options={options3}
                    autoFocus={true}
                    onChange={(event) => handleChangeArtist(event)}/>
            <Select theme={customTheme}
                    styles={customStyles}
                    className='dropdown__select'
                    placeholder='Select Color ...'
                    options={options4}
                    autoFocus={true}
                    onChange={(event) => handleChangeColor(event)}/>
            <Select theme={customTheme}
                    styles={customStyles}
                    className='dropdown__select'
                    placeholder='Select Landscape ...'
                    options={options5}
                    autoFocus={true}
                    onChange={(event) => handleChangeLandscape(event)}/>

            <label>
                Text input: <input type="text" onChange={event => handleUserInput(event)}/>
            </label>
            <button onClick={event => handleGenerate(event)}>Generate</button>
        </div>
    );
};

export default Dropdown;
