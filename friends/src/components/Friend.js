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
        
            <div className="friend-card">
                {!isEditing ?
                <div>
                    <h3>{friend.name}</h3>
                    <p>Age: {friend.age} years old</p>
                    <p><i class="fas fa-envelope"></i> {friend.email}</p>
                    <div class="buttons">
                        <button onClick={() => setIsEditing(true)}><i class="fas fa-user-edit"></i>Edit</button>{/* This button will set isEditing to true and show modal? */}
                        <button onClick={() => deleteFriend(friend.id)}><i class="fas fa-trash-alt"></i>Delete</button>
                    </div> 
                </div>
                :
                <form className="update-form" onSubmit={handleUpdate}>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input 
                            type="text"
                            name="name"
                            id="name"
                            value={updatedFriend.name}
                            onChange={handleChanges}
                        />
                    </div>

                    <div>
                        <label htmlFor="age">Age</label>
                        <input 
                            type="number"
                            name="age"
                            id="age"
                            value={updatedFriend.age}
                            onChange={handleChanges}
                        />
                    </div>

                    <div>
                        <label htmlFor="email">Email</label>
                        <input 
                            type="text"
                            name="email"
                            id="email"
                            value={updatedFriend.email}
                            onChange={handleChanges}
                        />
                    </div>

                    <div className="update-form-buttons">
                        <button type="Submit">Update</button>
                        <button onClick={() => setIsEditing(false)}>Cancel</button>
                    </div>
                </form>
}

            </div>
            
            
        
        
 
    )
}

export default Friend; 