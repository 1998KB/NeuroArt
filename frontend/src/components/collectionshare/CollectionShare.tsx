import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {Image} from "../gallery/Gallery";
import './CollectionShare.css'

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
        <div className='collectionshare'>
            {collection.name === '' ? <div className='collectionshare__loading'>Loading...</div> :
                <div className='collectionshare__container'>
                    <h1 className='collectionshare__author'>Author: {collection.name}</h1>
                    {images.map((image, index) => <img className='collectionshare__img' key={index} src={image.url}/>)}
                </div>
            }
        </div>
    )
}

export {
    CollectionShare
}

