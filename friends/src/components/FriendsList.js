import React, { useContext } from 'react';
import Friend from './Friend';
import { FriendContext } from '../contexts/FriendContext';

const FriendsList = () => {
    const { friends } = useContext(FriendContext);

    return (
        <div>
            <h2 className="my-friends">My Friends</h2>
            <div className="friend-list">
                {friends.map(friend => {
                    return <Friend 
                        key={friend.id}
                        friend={friend}
                    />
                })}
            </div>
        </div>
    )
}

export default FriendsList;