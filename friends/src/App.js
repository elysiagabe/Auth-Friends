import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

//components
import Header from './components/Header';
import LoginForm from './components/LoginForm';
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';

function App(props) {
  return (
    <div className="App">
      <Header />
      <Switch>
        {/* Change Friends route to private route */}
        <PrivateRoute path="/friends" component={FriendsList} />
        <Route path="/" component={LoginForm} />
      </Switch>
    </div>
  );
}

export default App;
