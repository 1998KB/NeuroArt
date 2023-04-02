import React from 'react';
import "./AppContainer.css"
import {Route, Routes} from 'react-router-dom'
import Header from "../header/Header";
import Home from "../home/Home";
import Generate from "../generate/Generate";
import Gallery from "../gallery/Gallery";
import About from "../about/About";
import {GoogleOAuthProvider} from "@react-oauth/google";
import Login from "../googlelogin/Login";
import Gallery2 from "../gallery2/Gallery2";


const AppContainer = () => {
    return (
        <>
            <div>
                <Header/>
            </div>
            <div>
                <GoogleOAuthProvider clientId={"946318872366-410nr0nld5sghv8r8nntkllokcritu06.apps.googleusercontent.com"}>
                <Routes>
                    <Route path="/generate" element={<Generate/>}/>
                    <Route path="/gallery" element={<Gallery/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/gallery2" element={<Gallery2/>}/>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/login" element={<Login/>}/>
                </Routes>
                </GoogleOAuthProvider>
            </div>
        </>
    );
};

export default AppContainer;
