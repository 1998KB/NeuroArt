import React from 'react';
import "./AppContainer.css"
import {Routes, Route} from 'react-router-dom'
import Header from "../header/Header";
import Home from "../home/Home";
import Generate from "../generate/Generate";


const AppContainer = () => {
    return (
        <>
            <div>
                <Header/>
            </div>
            <div>
                <Routes>
                    <Route path="/generate" element={<Generate/>}/>
                    <Route path="/" element={<Home/>}/>
                </Routes>
            </div>
        </>
    );
};

export default AppContainer;