import React, { Component } from 'react';

export default class MouseComponent extends Component {

  componentDidMount() {
    require("./hoverEffect.js")
  }
  
  render() {
    return (
      <div className="bar" id="mouse">
        <canvas id="canvas"></canvas>
      </div>
    )
  }
}
