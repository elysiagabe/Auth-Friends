import React, { useState, useContext } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { FriendContext } from '../contexts/FriendContext';
import Friends from '../assets/friends.png';

const LoginForm = (props) => {
    const { setLoggedIn } = useContext(FriendContext);

    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    });

    const handleInputChange = e => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value  
        })
    }

    const login = e => {
        e.preventDefault();
        axiosWithAuth()
            .post('/api/login', credentials)
            .then(res => {
                console.log(res);
                localStorage.setItem('token', res.data.payload);
                props.history.push('/friends');
                setLoggedIn(true);
            })
            .catch(err => console.log('There was an error logging in: ', err))
    }

    console.log('location:', props.location)

    return (
        <div className="login-page">
            <form className="login-form" onSubmit={login} >
                <h2>Stay up to date with all your friends</h2>
                <label htmlFor="username">Username</label>
                <input 
                    type="text"
                    name="username"
                    id="username"
                    value={credentials.username}
                    onChange={handleInputChange}
                />

                <label htmlFor="password">Password</label>
                <input 
                    type="password"
                    name="password" 
                    id="password"
                    value={credentials.password}
                    onChange={handleInputChange}
                />

                <button type="submit">Log In</button>
            </form>
            <img src={Friends} alt="illustration of 3 friends facing away holding up peace signs" />
        </div>
    )
}

export default LoginForm;