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
                    <NavLink to="/friends" activeClassName="active-header-link" className="header-link">My Friends</NavLink>
                    <NavLink to="/addfriend" activeClassName="active-header-link" className="header-link">Add Friend</NavLink>
                    <button onClick={logout} className="header-button">Log Out</button>
                </div>   
                :
                <NavLink to="/" className="header-button">Log In</NavLink>  
            }
        </header>
    )
}

export default Header;