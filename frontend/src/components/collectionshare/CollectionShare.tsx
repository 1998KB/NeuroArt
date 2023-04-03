import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {Image} from "../gallery/Gallery";

interface CollectionShare {
    name: string,
    description: string,
    images: Image[]
}

const CollectionShare = () => {
    const [images, setImages] = useState<Image[]>([]);
    const [collection, setCollection] = useState<CollectionShare>({name:'',description:'',images:[]});
    let {id} = useParams();

    useEffect(() => {
        fetch(`https://neuroart.azurewebsites.net/collection/${id}`)
            .then(response => response.json())
            .then(data => {
                const collection: CollectionShare = data;
                setImages(collection.images);
                setCollection(collection);
            });
    }, []);

    return (
        <div>
            {collection.name === '' ? <div>Loading...</div> :
                <div>
                    <h1>Author: {collection.name}</h1>
                    {images.map((image, index) => <img key={index} src={image.url}/>)}
                </div>
            }
        </div>
    )
}

export {
    CollectionShare
}
