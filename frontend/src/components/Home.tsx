import React from 'react';
import "../stylesheets/Home.css"
import ImageCarousel from "./ImageCarousel";
import About from "./About";
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div className='home'>
            <img className='home__image' src={require('../components/Images/LogoName.png')}/>
            <p className="home__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid
                beatae dolores eaque enim eveniet illum ipsam maxime modi, molestiae necessitatibus odio officia
                provident quia sunt! Commodi consequatur cum dicta ducimus et, eveniet ex placeat quod voluptates.
                Adipisci, aliquid animi at culpa debitis dolorem eos eum officia, provident quo suscipit totam
                voluptatem voluptates. Aperiam architecto consequuntur deserunt doloribus eius error, iure veniam!
                Aspernatur assumenda dolorum ex excepturi exercitationem expedita facere ipsam iure magni maiores, natus
                odit quasi quo recusandae reiciendis rem repellat tempora velit. A corporis eveniet explicabo mollitia
                optio, quaerat quo! Cupiditate eligendi excepturi pariatur quae quaerat quia unde.</p>
            <img className='home__image' src={require('../components/Images/LogoImgWhite.png')}/>
            <h1 className="home__motto">Explore Your Creativity</h1>
            <Link className='home__try-now' to='/generate'>Try Now</Link>
            <Link className='home__visit-our-gallery' to='/gallery'>Visit Our Gallery</Link>

        </div>
    );
};

export default Home;
