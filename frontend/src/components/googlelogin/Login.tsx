import React, {useState} from 'react';
import { GoogleLogin, googleLogout } from '@react-oauth/google';

const Login = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const handleLogout = () => {
        googleLogout();
        setLoggedIn(false);
        console.log('User logged out successfully.');
    };

    return (
        <>
            <GoogleLogin
                auto_select={true}
                onSuccess={(credentialResponse) => {
                    setLoggedIn(true)
                    console.log(credentialResponse);

                }}
                onError={() => {
                    console.log('Login Failed:');
                }}
            />
            {loggedIn ? <p>User is logged in</p> : <p>User is not logged in</p>}
            <button onClick={handleLogout}>Google logout</button>
        </>
    );
};

export default Login;
