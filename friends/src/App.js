import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
//contexts
import { FriendContext } from './contexts/FriendContext';
//utils
//components
import Header from './components/Header';
import LoginForm from './components/LoginForm';
import FriendsList from './components/FriendsList';
import AddFriendForm from './components/AddFriendForm';
import PrivateRoute from './components/PrivateRoute';
import { axiosWithAuth } from './utils/axiosWithAuth';

function App(props) {
  const [friends, setFriends] = useState([])

  useEffect(() => {
      axiosWithAuth()
          .get('/api/friends')
          .then(res => {
              console.log(res)
              setFriends(res.data)
          })
          .catch(err => console.log("Error fetching data: ", err))
  }, [])

  const addFriend = friend => {
    const newFriend = {
      name: friend.name,
      age: friend.age,
      email: friend.email,
      id: Date.now()
    }
    axiosWithAuth()
      .post('/api/friends', newFriend)
      .then(res => {
        console.log('Successfully added new friend', res)
        setFriends([...friends, newFriend])
      })
      .catch(err => console.log('Error adding friend:', err))
  }



  return (
    <FriendContext.Provider value={{ friends, addFriend }}>
      <div className="App">
        <Header />
        <Switch>
          {/* Change Friends route to private route */}
          <PrivateRoute path="/friends" component={FriendsList} />
          <PrivateRoute path="/addfriend" component={AddFriendForm} />
          <Route path="/" component={LoginForm} />
        </Switch>
      </div>
    </FriendContext.Provider>
  );
}

export default App;
