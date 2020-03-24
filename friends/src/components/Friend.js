import React, { useContext } from 'react';
import { FriendContext } from '../contexts/FriendContext';

const Friend = ({friend}) => {
    const { deleteFriend, editFriend } = useContext(FriendContext);

    return (
        <div className="friend border">
            <p className="border"> {friend.name}, {friend.age} years old </p>
            <p className="border">Email: {friend.email}</p>
            <div>
                <button>Edit</button>
                <button onClick={() => deleteFriend(friend.id)}>Delete</button>
            </div>
        </div>
    )
}

export default Friend; 