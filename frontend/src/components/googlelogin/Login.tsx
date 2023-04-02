import React, {useState} from 'react';
import {CredentialResponse, GoogleLogin, googleLogout} from '@react-oauth/google';

interface loginProps {
    setCredentials: Function
}
const Login = (props: loginProps) => {
    const handleLogout = () => {
        googleLogout();
        console.log('User logged out successfully.');
        props.setCredentials(null);
    };

    const handleLogin = async (credentials: CredentialResponse) => {
        const response = await fetch(
            "https://neuroart.azurewebsites.net/user",
            {
                method: 'POST',
                headers: {'authorization': `${credentials.credential}`},
            }
        )

        if (!response.ok) {
            throw new Error(`Failed to get user: ${response.status}`);
        }

        const url = await response.text();
    };

    return (
        <>
            <GoogleLogin
                auto_select={true}
                onSuccess={(credentialResponse) => {
                    console.log(credentialResponse);
                    handleLogin(credentialResponse)
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
