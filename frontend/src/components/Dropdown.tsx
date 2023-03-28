import React, {useRef, useState} from 'react';
import '../stylesheets/Dropdown.css'
import Select, {OnChangeValue, Options, StylesConfig} from 'react-select';


const options1 = [
    {value: 'cinematic lighting', label: 'Cinematic Lighting'},
    {value: 'dappled lighting', label: 'Dappled Lighting'},
    {value: 'bright lighting', label: 'Bright Lighting'},
    {value: 'ambient lighting', label: 'Ambient Lighting'},
    {value: 'flat lighting', label: 'Flat Lighting'},
    {value: 'volumetric lighting', label: 'Volumetric Lighting'},
    {value: 'backlit', label: 'Backlit'}
]
interface Option {
    value: string,
    label: string
}

const Dropdown = () => {

    const [prompt, setPrompt] = useState<string>('');

    let lighting: string;
    let userInput: string;
    const handleChangeLighting = (event: OnChangeValue<Option, false>) => {
        console.log('onChange ' + event)

        // @ts-ignore
        lighting = event.value
        console.log('lighting 1 ' + lighting)


    };
    const handleGenerate = (e:any) => {
        e.preventDefault()
        setPrompt(lighting + ' ' + userInput)
    }


    const handleUserInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log('un')
        userInput = event.target.value;
    }

    const hey = () => {
        console.log('prompt ' + prompt)
    }
    hey()

    return (
        <div className='form-container'>
            <Select theme={(theme) => ({
                ...theme,
                borderRadius: 0,
                colors: {
                    ...theme.colors,
                    primary25: 'lightgrey',
                    primary: 'black'
                }
            })}
                    styles={{
                        option: (baseStyle, state) => ({
                            ...baseStyle,
                            color: 'darkgrey',


                        })
                    }} className='dropdown__select'
                    placeholder='Select Lighting ...' options={options1}
                    autoFocus={true} onChange={event => handleChangeLighting(event)}/>
            <label>
                Text input: <input type="text" onChange={event => handleUserInput(event)}/>

            </label>
            <button onClick={handleGenerate}>Generate</button>
        </div>
    );
};

export default Dropdown;
