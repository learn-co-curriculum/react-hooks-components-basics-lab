import React, { Component } from 'react';
import CatComponent from './CatComponent.js'
import FordComponent from './FordComponent.js'
import MouseComponent from './MouseComponent.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <CatComponent />
        <FordQuoteComponent />
        <MouseComponent />
      </div>
    );
  }
}

export default App;
