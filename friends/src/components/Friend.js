import React from 'react';

const Friend = ({friend}) => {
    return (
        <div className="friend border">
            <p className="border"> {friend.name}, {friend.age} years old </p>
            <p className="border">Email: {friend.email}</p>
            <p className="border">Edit Delete</p>
        </div>
    )
}

export default Friend; 