import "./Gallery.css"
import ImageCarousel from "../imageCarousel/ImageCarousel";


const Gallery = () => {
    const items = [
        {
            imageAlt: 'picture1',
            imageSrc: 'https://images.unsplash.com/photo-1679970422040-e787973f1d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
        },
        {
            imageAlt: 'picture2',
            imageSrc: 'https://images.unsplash.com/photo-1680007631114-cc0b37816fff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
        },
        {
            imageAlt: 'picture3',
            imageSrc: 'https://images.unsplash.com/photo-1679629595664-87d8ab6f56cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
        },
        {
            imageAlt: 'picture4',
            imageSrc: 'https://images.unsplash.com/photo-1679715504051-e218e6949815?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
        },
        {
            imageAlt: 'picture5',
            imageSrc: 'https://images.unsplash.com/photo-1679237349122-10d475948e2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
        },
    ]
    return (
        <div className='gallery'>
            <ImageCarousel  items={items}/>
        </div>
    );
};

export default Gallery;
