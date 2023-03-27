import React from 'react';
import "../stylesheets/Home.css"
import ImageCarousel from "./ImageCarousel";
import About from "./About";

const Home = () => {
    return (
        <div>
            <p>Home</p>
            <ImageCarousel/>
            <About/>
        </div>
    );
};

export default Home;
