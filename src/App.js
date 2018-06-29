import React, { Component } from 'react';
import CatComponent from './CatComponent.js'
import MouseComponent from './MouseComponent.js'
import FordQuoteComponent from './FordQuoteComponent.js'

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
