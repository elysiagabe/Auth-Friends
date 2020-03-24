import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const LoginForm = (props) => {
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
            })
            .catch(err => console.log('There was an error logging in: ', err))
    }

    return (
        <form onSubmit={login} >
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

            <button type="submit">Login</button>
        </form>
    )
}

export default LoginForm;