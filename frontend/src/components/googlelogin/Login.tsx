import React, {useState} from 'react';
import { GoogleLogin, googleLogout } from '@react-oauth/google';

interface loginProps {
    setCredentials: Function
}
const Login = (props: loginProps) => {
    const handleLogout = () => {
        googleLogout();
        console.log('User logged out successfully.');
        props.setCredentials(null);
    };

    return (
        <>
            <GoogleLogin
                auto_select={true}
                onSuccess={(credentialResponse) => {
                    console.log(credentialResponse);
                    props.setCredentials(credentialResponse);
                }}
                onError={() => {
                    console.log('Login Failed:');
                }}
            />
            <button onClick={handleLogout}>Google logout</button>
        </>
    );
};

export default Login;
