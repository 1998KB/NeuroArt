import React, {useEffect, useState} from 'react';
import "./Generate.css"
import Form from "../form/Form";
import ImageContainer from "../imageContainer/ImageContainer";

const Generate = () => {
    const [prompt, setPrompt] = useState<string>('');
    const [generatedImage, setGeneratedImage] = useState<string>('');

    useEffect(() => {
        setPrompt('')
        return () => {
            console.log("in the use effect")
            console.log(prompt)
            if (prompt === ''){
                console.log("in empty")
                return
            }
            handleGenerate()
        };
    }, [prompt]);


    const handleGenerate = async () => {
        const response = await fetch(
            "http://localhost:8080/generate",
            {
                method: "POST",
                headers: {
                    "Content-Type": "text/plain",
                },
                body: prompt,
            }
        );

        if (!response.ok) {
            throw new Error(`Failed to generate image: ${response.status}`);
        }

        const url = await response.text();
        console.log()

        setGeneratedImage( url );
    };

    return (
        <div>
            <h1 className='heading'>Be Creative</h1>
            <p className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab amet animi assumenda dicta iusto nisi officiis placeat praesentium quasi sint. Corporis deleniti illo, inventore minima molestiae mollitia nemo quia sequi voluptatibus voluptatum! Aliquid commodi, distinctio fugiat itaque magni maiores minus molestiae neque nostrum officia perferendis possimus quae quam rem veniam. Amet aperiam atque beatae consectetur, cumque deleniti deserunt dignissimos dolorem dolores doloribus eligendi enim, eos est ex in ipsam ipsum laboriosam laborum minima mollitia nostrum odit placeat quas quibusdam quos tempora tempore vel velit voluptates voluptatum. At consequuntur dolor expedita explicabo hic itaque, iusto magnam neque, obcaecati saepe sunt tempora?</p>
            <Form setPrompt={setPrompt}/>
            <ImageContainer image={generatedImage}/>
        </div>
    );
};

export default Generate;
