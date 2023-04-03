import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {Image} from "../gallery/Gallery";

const ImageShare = () => {
    const [image, setImage] = useState<Image>({id:'',url:'',prompt:'',title:'',description:''});
    let {id} = useParams();

    useEffect(() => {
        fetch(`https://neuroart.azurewebsites.net/image/${id}`)
            .then(response => response.json())
            .then(data => {
                const image: Image = data
                setImage(image)
            });
    }, []);

    return (
        <div>
            {image.url === '' ? <div>Loading...</div> :
                <div>
                    <h1>Title: {image.title}</h1>
                    <img src={image.url}/>
                    {image.description && <p>Description: {image.description}</p>}
                    <p>Prompt: {image.prompt}</p>
                </div>
            }
        </div>
    )
}

export {
    ImageShare
}
