import React, {useState} from 'react';
import {CredentialResponse, GoogleLogin, googleLogout} from '@react-oauth/google';
import {Image} from "../gallery/Gallery";

interface loginProps {
    setCredentials: Function
}

interface Collection {
    description: String
    images: Image[]

}
interface User {
    username: String,
    collectionList: Collection[]
    email: String,
    picture: string
}
const Login = (props: loginProps) => {
    const [userImages, setUserImages] = useState<Image[]>([]);
    const [loggedIn, setLoggedIn] = useState(false);
    const [user, setUser] = useState<User>({username:'',collectionList:[],
    email:'',picture:''});
    const handleLogout = () => {
        googleLogout();
        console.log('User logged out successfully.');
        props.setCredentials(null);
        setLoggedIn(false)
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

        console.log(data.username)
        console.log(data.email)
        console.log(data.picture)
        console.log(data.collectionList)
        const collections: Collection = data.collectionList[0];
        console.log(collections.description)
        console.log(collections.images)
        setUserImages(collections.images)
        setUser(data)
        setLoggedIn(true);
    };

    return (
        <>
            {loggedIn ?
            <>
                <h1>{user.username}</h1>
                <h2>{user.email}</h2>
                <img src={user.picture} alt={'no'}/>
                {user.collectionList[0].images.map((image, index) => {
                    return <img key={index} src={image.url} alt={'no'}/>
                })}
            </>
                : <GoogleLogin
                auto_select={true}
                onSuccess={(credentialResponse) => {
                    console.log(credentialResponse);
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
