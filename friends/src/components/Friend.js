import React, { useState, useContext } from 'react';
import { FriendContext } from '../contexts/FriendContext';

const Friend = ({friend}) => {
    const { deleteFriend, editFriend } = useContext(FriendContext);

    const [updatedFriend, setUpdatedFriend] = useState({
        // name: '',
        // age: '',
        // email: ''
    });
    const [isEditing, setIsEditing] = useState(false);

    const handleChanges = e => {
        setUpdatedFriend({
            ...updatedFriend,
            [e.target.name]: e.target.value
        })
    }

    const handleUpdate = e => {
        e.preventDefault();
        editFriend(friend.id, updatedFriend);
        setIsEditing(false);
    }

    return (
        
            <div className="friend border">
                {!isEditing ?
                <div>
                <p className="border"> {friend.name}, {friend.age} years old </p>
                <p className="border">Email: {friend.email}</p>
                <div>
                    <button onClick={() => setIsEditing(true)}>Edit</button>{/* This button will set isEditing to true and show modal? */}
                    <button onClick={() => deleteFriend(friend.id)}>Delete</button>
                </div> 
                </div>
                :
                <form onSubmit={handleUpdate}>
                    <label htmlFor="name">Name</label>
                    <input 
                        type="text"
                        name="name"
                        id="name"
                        value={updatedFriend.name}
                        onChange={handleChanges}
                    />

                    <label htmlFor="age">Age</label>
                    <input 
                        type="number"
                        name="age"
                        id="age"
                        value={updatedFriend.age}
                        onChange={handleChanges}
                    />

                    <label htmlFor="email">Email</label>
                    <input 
                        type="text"
                        name="email"
                        id="email"
                        value={updatedFriend.email}
                        onChange={handleChanges}
                    />
                    <button type="Submit">Update</button>
                    <button onClick={() => setIsEditing(false)}>Cancel</button>
                </form>
}

            </div>
            
            
        
        
 
    )
}

export default Friend; 