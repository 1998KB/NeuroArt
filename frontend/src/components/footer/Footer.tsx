import React from 'react';
import "./Footer.css"

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer__logo'>
                <img className='footer__image-wheel' src={require('../../Images/LogoImgWhite.png')}/>
            </div>
            <div className='footer__contact'>
                <h1>Contact</h1>
                <p>✆ +31 0000000</p>
                <p>John M. Keynesplein 12-46, 1066 EP Amsterdam</p>
                <p>brainware@appliedtechnology.se</p>
            </div>
        </div>
    );
};

export default Footer;