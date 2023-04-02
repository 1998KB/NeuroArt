import React from 'react';
import "./AppContainer.css"
import {Route, Routes} from 'react-router-dom'
import Header from "../header/Header";
import Home from "../home/Home";
import Generate from "../generate/Generate";
import Gallery from "../gallery/Gallery";
import About from "../about/About";
import Gallery2 from "../gallery2/Gallery2";


const AppContainer = () => {
    return (
        <>
            <div>
                <Header/>
            </div>
            <div>
                <Routes>
                    <Route path="/generate" element={<Generate/>}/>
                    <Route path="/gallery" element={<Gallery/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/gallery2" element={<Gallery2/>}/>
                    <Route path="/" element={<Home/>}/>

                </Routes>
            </div>
        </>
    );
};

export default AppContainer;
