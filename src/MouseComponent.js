import React, { useEffect } from 'react';

export default function MouseComponent() {

  useEffect(() => {
    require("./hoverEffect.js")
  }, [])

  return (
    <div className="bar" id="mouse" data-testid="mouse-component">
      <canvas id="canvas"></canvas>
    </div>
  )
}
