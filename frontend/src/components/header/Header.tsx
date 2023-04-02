import React from 'react';
import "./Header.css"
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className='header'>
            <header className='header__header'>
                <div className='header__logo-search'>
                    <div className="header__logo-div">
                        <a href='/'>
                            <img className='header__logo-img' src={require('../../Images/LogoImg.png')}/>
                        </a>
                        <a href='/'>
                            <img className='header__logo-name' src={require('../../Images/LogoName.png')}/>
                        </a>
                    </div>
                    <input className='header__search-bar' placeholder='Search for anything'/>
                </div>
                <div className="header__navigation">
                    <Link to='/'>Home</Link>
                    <Link to='/generate'>Generate</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/gallery'>Gallery</Link>
                    <Link to='/login'>Login</Link>
                    <Link to='/gallery2'>Gallery2</Link>
                </div>
            </header>
        </div>
    );
};

export default Header;
