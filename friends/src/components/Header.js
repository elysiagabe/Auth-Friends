import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { FriendContext } from '../contexts/FriendContext'

const Header = () => {
    const { loggedIn, setLoggedIn } = useContext(FriendContext);
    
    const logout = e => {
        e.preventDefault();
        localStorage.removeItem('token')
        setLoggedIn(false)
    }

    return (
        <header>
            <h1>The Friends App</h1>
            {loggedIn ? 
                <div>
                <NavLink to="/friends">My Friends</NavLink>
                <NavLink to="/addfriend">Add Friend</NavLink>
                <button onClick={logout}>Logout</button>
                </div>   
                :
                <p>Login</p>  
            }
        </header>
    )
}

export default Header;