import React, {useEffect, useState} from 'react';
import "../stylesheets/Header.css"
import {Link, useNavigate} from "react-router-dom";

const Header = () => {
    return (
        <div>
            <header className='header'>
                <a href='/'>
                    <img className='header__logo-img' src={require('../components/Images/LogoImg.png')}/>
                </a>
                <a href='/'>
                    <img className='header__logo-name' src={require('../components/Images/LogoName.png')}/>
                </a>
                <input className='header__search-bar' placeholder='Search for anything'/>
                <div className="header__navigation">
                    <Link to='/'>Home</Link>
                    <Link to='/generate'>Generate</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/gallery'>Gallery</Link>
                    <Link to='/login'>Login</Link>
                </div>
            </header>
        </div>
    );
};

export default Header;
