import React, {useEffect} from 'react';
import {CredentialResponse, GoogleLogin, googleLogout} from '@react-oauth/google';
import {User} from "../../interfaces";
import "./Login.css";

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

    useEffect(() => {
        if (props.credentials !== null){
            handleLogin(props.credentials)
        }
    }, [])

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
        <div className='login'>
            {props.user.username !== '' ?
            <div>
                <div className='login__info'>
                    <img src={props.user.picture} alt={'no'}/>
                    <div className='login__info__text'>
                        <h1>{props.user.username}</h1>
                        <h2>{props.user.email}</h2>
                        <button onClick={handleLogout}>Logout</button>
                    </div>

                </div>
                <div className='login__images'>
                    {props.user.collectionList[0].images.map((image, index) => {
                        return <img className='login__images__image' key={index} src={image.url} alt='image'/>
                    })}
                </div>

            </div>
                : <GoogleLogin
                onSuccess={(credentialResponse) => {
                    handleLogin(credentialResponse)
                    props.setCredentials(credentialResponse);
                }}
                onError={() => {
                    console.log('Login Failed:');
                }}
            />}
        </div>
    );
};

export default Login;
