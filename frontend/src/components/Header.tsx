import React from 'react';
import "../stylesheets/Header.css"
import {useNavigate} from "react-router-dom";


const Header = () => {
    let nav = useNavigate();
    return (
        <div>
            <p>Header</p>
            <button onClick={() => nav("/home")}>fuck off NOW</button>
        </div>
    );
};

export default Header;
