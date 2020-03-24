import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

//components
import Header from './components/Header';
import LoginForm from './components/LoginForm';
import FriendsList from './components/FriendsList';

function App(props) {
  return (
    <div className="App">
      <Header />
      <Switch>
        {/* Change Friends route to private route */}
        <Route path="/friends" component={FriendsList} />
        <Route path="/" component={LoginForm} />
      </Switch>
    </div>
  );
}

export default App;
