import React, { Component } from 'react';
import logo from '../images/logo.svg';
import { HashRouter } from 'react-router-dom';
import PrimaryLayout from '../containers/PrimaryLayout';
import './App.css';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <PrimaryLayout />
      </HashRouter>
    );
  }
}

export default App;
