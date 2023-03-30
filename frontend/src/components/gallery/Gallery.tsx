import "./Gallery.css"
import ImageCarousel from "../imageCarousel/ImageCarousel";
import {useEffect, useState} from "react";

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

    return (
        <div className='gallery'>
            {images.length > 0 && <ImageCarousel items={items}/>}
        </div>
    );
};

export default Gallery;
