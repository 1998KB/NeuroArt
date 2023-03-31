import "./Gallery.css"
import ImageCarousel from "../imageCarousel/ImageCarousel";
import React, {useEffect, useState} from "react";

type Image = {
    id: string;
    url: string;
    prompt: string;
    title: string;
    description: string;
}

const Gallery = () => {

    const [images, setImages] = useState<Image[]>([])

    useEffect(() => {
        async function fetchImages() {
            const response = await fetch('https://neuroart.azurewebsites.net/gallery');
            const images: Image[] = await response.json()
            setImages(images);
        }
        fetchImages();
    }, [])

    const items = images.map(image => ({
        imageAlt: image.title,
        imageSrc: image.url,
        imageId: image.id
    }))

    async function deleteImage(event: React.MouseEvent<HTMLButtonElement>, id: string) {
        event.preventDefault()

        const response = await fetch(`https://neuroart.azurewebsites.net/image/${id}`, {
            method: 'DELETE'
        });
    }

    return (
        <div className='gallery'>
            <div className='gallery__carousel-container'>
                {images.length > 0 && <ImageCarousel items={items}/>}
            </div>
            <div className='gallery__image-container'>
                {items.map((item, index) => (
                    <div key={index}>
                        <img className='gallery__image' src={item.imageSrc}/>
                        <button className='imagecarousel__button-delete' onClick={event => deleteImage(event, item.imageId)}> Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;
