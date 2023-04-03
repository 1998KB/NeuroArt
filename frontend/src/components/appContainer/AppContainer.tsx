import React, {useState} from 'react';
import "./AppContainer.css"
import {Route, Routes} from 'react-router-dom'
import Header from "../header/Header";
import Home from "../home/Home";
import Generate from "../generate/Generate";
import Gallery from "../gallery/Gallery";
import About from "../about/About";
import {CredentialResponse, GoogleOAuthProvider} from "@react-oauth/google";
import Login from "../googlelogin/Login";
import Gallery2 from "../gallery2/Gallery2";
import {User} from "../../interfaces";


const AppContainer = () => {
    const [credentials, setCredentials] = useState<CredentialResponse | null>(null);
    const [user, setUser] = useState<User>({username:'',collectionList:[],
        email:'',picture:''});
    return (
        <>
            <div>
                <Header user={user}/>
            </div>
            <div>
                <GoogleOAuthProvider clientId={"946318872366-410nr0nld5sghv8r8nntkllokcritu06.apps.googleusercontent.com"}>
                <Routes>
                    <Route path="/generate" element={<Generate credentials={credentials}/>}/>
                    <Route path="/gallery" element={<Gallery/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/gallery2" element={<Gallery2/>}/>
                    <Route path="/login" element={<Login user={user} setUser={setUser}
                                                         credentials={credentials} setCredentials={setCredentials}/>}/>
                    <Route path="/" element={<Home/>}/>
                </Routes>
                </GoogleOAuthProvider>
            </div>
        </>
    );
};

export default AppContainer;
