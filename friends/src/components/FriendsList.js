import React, { useContext } from 'react';
import Friend from './Friend';
import { FriendContext } from '../contexts/FriendContext';

const FriendsList = () => {
    const { friends } = useContext(FriendContext);

    return (
        <div>
            <h2>My Friends</h2>
            {friends.map(friend => {
                return <Friend 
                    key={friend.id}
                    friend={friend}
                />
            })}
        </div>
    )
}

export default FriendsList;