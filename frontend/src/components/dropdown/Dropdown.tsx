import React, {useRef, useState} from 'react';
import './Dropdown.css'
import Select, {CSSObjectWithLabel, OnChangeValue, OptionProps, Theme} from 'react-select';
import {options1, options2, options3, options4, options5} from "./options";
import {DropdownProps, Option} from "../../interfaces";



const Dropdown = (props: DropdownProps) => {
    const [lightingOption, setLightingOption] = useState<Option>({value: 'Select ', label:'select'});
    const [styleOption, setStyleOption] = useState<Option>({value: 'Select ', label:'select'});
    const [artistOption, setArtistOption] = useState<Option>({value: 'Select ', label:'select'});
    const [colorOption, setColorOption] = useState<Option>({value: 'Select ', label:'select'});
    const [landscapeOption, setLandscapeOption] = useState<Option>({value: 'Select ', label:'select'});
    const [userInput, setUserInput] = useState('');
    const handleReset = () => {
        setLightingOption({value: 'Select ', label:'select'});
        setStyleOption({value: 'Select ', label:'select'});
        setArtistOption({value: 'Select ', label:'select'});
        setColorOption({value: 'Select ', label:'select'});
        setLandscapeOption({value: 'Select ', label:'select'});
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
    const handleChangeArtist = (event: OnChangeValue<unknown, false>) => {
        if (event) {
            setArtistOption(event as Option);
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
        if (lightingOption) {
            prompt = [prompt, lightingOption.value].join(' ').toString()
        }
        if (styleOption) {
            prompt = [prompt, styleOption.value].join(' ').toString()
        }
        if (artistOption) {
            prompt = [prompt, artistOption.value].join(' ').toString()
        }
        if (colorOption) {
            prompt = [prompt, colorOption.value].join(' ').toString()
        }
        if (landscapeOption) {
            prompt = [prompt, landscapeOption.value].join(' ').toString()
        }
        return prompt;
    }
    const handleGenerate = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        let promptMade = makePrompt()
        console.log(promptMade)
        if (promptMade){
            console.log("in dropdown :" + promptMade)
            props.setPrompt(promptMade)
            props.setGenerated(false)
            console.log("after setting prompt")
        }
        handleReset();
    }
    const handleUserInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserInput(event.target.value);
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
        option: (provided: CSSObjectWithLabel, state: OptionProps) => ({
            ...provided,
            color: 'black'
        })
    };


    return (
        <div>
            <Select theme={customTheme}
                    className='dropdown__select'
                    placeholder='Select Lighting ...'
                    options={options1}
                    autoFocus={true}
                    onChange={(event) => handleChangeLighting(event)}
                    value={lightingOption}
            />
            <Select theme={customTheme}
                    className='dropdown__select'
                    placeholder='Select Style ...'
                    options={options2}
                    autoFocus={true}
                    onChange={(event) => handleChangeStyle(event)}
                    value={styleOption}
            />
            <Select theme={customTheme}
                    className='dropdown__select'
                    placeholder='Select Artist Style ...'
                    options={options3}
                    autoFocus={true}
                    onChange={(event) => handleChangeArtist(event)}
                    value={artistOption}
            />
            <Select theme={customTheme}
                    className='dropdown__select'
                    placeholder='Select Color ...'
                    options={options4}
                    autoFocus={true}
                    onChange={(event) => handleChangeColor(event)}
                    value={colorOption}
            />
            <Select theme={customTheme}
                    className='dropdown__select'
                    placeholder='Select Landscape ...'
                    options={options5}
                    autoFocus={true}
                    onChange={(event) => handleChangeLandscape(event)}
                    value={landscapeOption}
            />

            <label>
                Text input: <input type="text" onChange={event => handleUserInput(event)}/>
            </label>
            <button onClick={event => handleGenerate(event)} disabled={props.isLoading}>Generate</button>
        </div>
    );
};

export default Dropdown;
