import React, {useEffect, useState} from 'react';
import "./Footer.css"

const Footer = () => {
    const [showFooter, setShowFooter] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if(window.pageYOffset > 80) {
                setShowFooter(true);
            } else {
                setShowFooter(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    })

    return (
        <div className='foot'>
            <p className={`${showFooter ? "none" : "arrow"}`}>↓</p>
            <div className={`footer__container${showFooter ? " show" : ""}`}>
                <div className='footer'>
                    <div className='footer__logo'>
                        <img className='footer__image-wheel' src={require('../../Images/LogoImgWhite.png')}/>
                    </div>
                    <div className='footer__contact'>
                        <h1 className='footer__contact'>Contact</h1>
                        <p className='footer__p'>✆ +31 0000000</p>
                        <p className='footer__p'>John M. Keynesplein 12-46, 1066 EP Amsterdam</p>
                        <p className='footer__p'>brainware@appliedtechnology.se</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
