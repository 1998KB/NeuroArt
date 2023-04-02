import React from 'react';
import {CredentialResponse, GoogleLogin, googleLogout} from '@react-oauth/google';
import {User} from "../../interfaces";

interface loginProps {
    setCredentials: Function
    credentials: CredentialResponse | null
    setUser: Function
    user: User
}
const Login = (props: loginProps) => {
    const handleLogout = () => {
        googleLogout();
        props.setCredentials(null);
        props.setUser({username:'',collectionList:[],
            email:'',picture:''})
    };

    const handleLogin = async (credentials: CredentialResponse) => {
        const response = await fetch(
            "https://neuroart.azurewebsites.net/user",
            {
                method: 'POST',
                headers: {'Authorization': `Bearer ${credentials.credential}`},
            }
        )
        if (!response.ok) {
            throw new Error(`Failed to get user: ${response.status}`);
        }
        const data: User = await response.json();
        props.setUser(data)
    };

    return (
        <>
            {props.user.username !== '' ?
            <>
                <h1>{props.user.username}</h1>
                <h2>{props.user.email}</h2>
                <img src={props.user.picture} alt={'no'}/>
                {props.user.collectionList[0].images.map((image, index) => {
                    return <img key={index} src={image.url}/>
                })}
            </>
                : <GoogleLogin
                auto_select={true}
                onSuccess={(credentialResponse) => {
                    handleLogin(credentialResponse)
                    props.setCredentials(credentialResponse);
                }}
                onError={() => {
                    console.log('Login Failed:');
                }}
            />}
            <p></p>
            <button onClick={handleLogout}>Google logout</button>
        </>
    );
};

export default Login;
