import React, { useState, useContext } from 'react';
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
        <div>
            <h3>Add a New Friend</h3>
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
            <p>&larr; Back to My Friends</p>
        </div>
    )
}

export default AddFriendForm;