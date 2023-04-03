import React, {useEffect, useState} from 'react';
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

    const [hoveredImage, setHoveredImage] = useState<number | null>(null);
    const [deletedImages, setDeletedImages] = useState<string[]>([]);

    const handleLogout = () => {
        googleLogout();
        props.setCredentials(null);
        props.setUser({
            username: '', collectionList: [],
            email: '', picture: ''
        })
    };

    useEffect(() => {
        if (props.credentials !== null) {
            handleLogin(props.credentials)
        }
    }, [deletedImages])

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

    const onMouseEnter = (index: number) => {
        setHoveredImage(index);
    };

    const onMouseLeave = () => {
        setHoveredImage(null);
    };

    async function deleteImage(event: React.MouseEvent<HTMLButtonElement>, id: string) {
        event.preventDefault();
        await fetch(`https://neuroart.azurewebsites.net/image/${id}`,
            {
            method: "DELETE",
            headers: {'Authorization': `Bearer ${props.credentials?.credential}`},});
        setDeletedImages([...deletedImages, id]);
    }

    return (
        <div className='login'>
            {props.user.username !== '' ?
                <div>
                    <div className='login__info'>
                        <img src={props.user.picture} alt={'no'}/>
                        <div className='login__info__text'>
                            <h1>{props.user.username}</h1>
                            <h2>{props.user.email}</h2>
                        </div>

                    </div>
                    <div className='login__images'>
                        {props.user.collectionList[0].images.map((image, index) => {
                            return (
                                <div key={index} className='login__images__container'>
                                    <img
                                        onMouseEnter={() => onMouseEnter(index)}
                                        onMouseLeave={onMouseLeave}
                                        className='login__images__image'
                                        src={image.url}
                                        alt='image'
                                    />
                                    {hoveredImage === index && (
                                        <div className='login__images__info'>
                                            <h2>Title: {image.title}</h2>
                                            <h3>Description: {image.description}</h3>
                                            <button className="login__button-delete" onClick={(event) => deleteImage(event, image.id)}>
                                                Delete
                                            </button>
                                        </div>
                                    )}
                                </div>
                            );
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

            <button className='login__button__logout' onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Login;
