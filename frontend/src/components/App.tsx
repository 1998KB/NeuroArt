import React from 'react';
import '../stylesheets/App.css'
import {BrowserRouter} from 'react-router-dom'
import AppContainer from "./AppContainer";

function App() {
    return (
        <BrowserRouter>
            <AppContainer/>
        </BrowserRouter>
    );
}

export default App;
