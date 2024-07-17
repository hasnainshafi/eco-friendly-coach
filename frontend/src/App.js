// frontend/src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Register from './pages/Register';
import Login from './pages/Login';
import Profile from './pages/Profile';

const App = () => (
  <Router>
    <Navbar />
    <Switch>
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
      <Route path="/profile" component={Profile} />
    </Switch>
  </Router>
);

export default App;
