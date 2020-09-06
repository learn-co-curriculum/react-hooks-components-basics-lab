import React, { useEffect } from 'react';

export default function MouseComponent() {

  useEffect(() => {
    require("./hoverEffect.js")
  }, [])

  return (
    <div className="bar" id="mouse">
      <canvas id="canvas"></canvas>
    </div>
  )
}
