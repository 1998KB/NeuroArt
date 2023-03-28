import React from 'react';
import "../stylesheets/AppContainer.css"
import {Routes, Route} from 'react-router-dom'
import Header from "./Header";
import Home from "./Home";
import Generate from "./Generate";


const AppContainer = () => {
    return (
        <>
            <div>
                <Header/>
            </div>
            <div>
                <Routes>
                    <Route path="/generate" element={<Generate/>}/>
                    <Route path="/home" element={<Home/>}/>
                </Routes>
            </div>
        </>
    );
};

export default AppContainer;
