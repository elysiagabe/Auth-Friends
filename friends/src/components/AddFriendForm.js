import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FriendContext } from '../contexts/FriendContext';

const AddFriendForm = () => {
    const { friends, addFriend } = useContext(FriendContext);

    const [friend, setFriend] = useState({
        name: '',
        age: '',
        email: ''
    })

    const handleChanges = e => {
        setFriend({
            ...friend,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        addFriend(friend);
        setFriend({
            name: '',
            age: '',
            email: ''
        })
    }

    console.log(friends)

    return (
        <div className="add-form">
            <h2>Add a New Friend</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input 
                    type="text"
                    name="name"
                    id="name"
                    value={friend.name}
                    onChange={handleChanges}
                />

                <label htmlFor="age">Age</label>
                <input 
                    type="number"
                    name="age"
                    id="age"
                    value={friend.age}
                    onChange={handleChanges}
                />

                <label htmlFor="email">Email</label>
                <input 
                    type="text"
                    name="email"
                    id="email"
                    value={friend.email}
                    onChange={handleChanges}
                />

                <button type="submit">Add Friend</button>
            </form>
            <Link to="/friends" className="add-form-link">&larr; Back to My Friends</Link>
        </div>
    )
}

export default AddFriendForm;