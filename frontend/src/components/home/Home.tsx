import React from 'react';
import "./Home.css"
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div className='home'>
            <img className='home__image' src={require('../../Images/LogoName.png')}/>
            <p className="home__description">Welcome to NeuroArt, a website where you can unleash your creativity.
                With our tool, you can translate your thoughts into stunning and unique images.
                Our state-of-the-art AI technology allows you to experiment with various styles, colors,
                and themes to bring your vision to life.
                Whether you're an artist, designer, or simply someone who loves to create,
                NeuroArt is the perfect platform to explore your imagination.
                Our easy-to-use interface and intuitive controls make it simple to generate beautiful images in just a few clicks.
                With NeuroArt, the only limit is your imagination. Sign up now and see what you can create!</p>
            <img className='home__image-wheel' src={require('../../Images/LogoImgWhite.png')}/>
            <h1 className="home__motto">Explore Your Creativity</h1>
            <div className='home__link-div'>
                <Link className='home__try-now' to='/generate'>Try Now</Link>
                <Link className='home__visit-our-gallery' to='/gallery'>Visit Our Gallery</Link>
            </div>
        </div>
    );
};

export default Home
