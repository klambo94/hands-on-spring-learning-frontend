import React, { Component } from 'react';
import './App.css';
import './components/Carlist.js'
import Login from './components/Login.js';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar position="static" color="default">
          <Toolbar>Carlist</Toolbar>
        </AppBar>
        <Login />
      </div>
    );
  }
}

export default App;
