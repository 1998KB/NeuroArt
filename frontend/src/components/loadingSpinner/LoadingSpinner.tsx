import React from 'react';
import './LoadingSpinner.css'

const LoadingSpinner = () => {
    return (
        <div className='spinning-container'>
            <div className="spinner-container__loading-spinner">
                <p>Loading . . .</p>
                <img className='spinner-container__loading-spinner-img ' src={require('../../Images/LogoImgWhite.png')}/>

            </div>
        </div>
    );
};

export default LoadingSpinner;
