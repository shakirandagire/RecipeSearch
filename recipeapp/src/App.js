import React, { Component } from 'react';
import './App.css';
import Recipes from '../src/Recipes'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Recipes/>
      </div>
    );
  }
}

export default App;
