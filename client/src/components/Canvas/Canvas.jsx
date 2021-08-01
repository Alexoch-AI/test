import React, { useEffect, useRef } from 'react'
import { drawStar } from './canvasFunctions';
import './styleCanvas.css'

function Canvas() {
  const canvasRef = useRef(null);
  const canvasRef2 = useRef(null);

  const handlerUpdateColor = (e) => {
    const currentCoord = { x: e.clientX, y: e.clientY };
    const canvasObj2 = canvasRef2.current;
    const x = currentCoord.x
    const y = currentCoord.y
    const distanseBlackStar = Math.sqrt(((x - 75) * (x - 75)) + ((y - 100) * (y - 100)));
    const distanseGreenStar = Math.sqrt(((x - 175) * (x - 175)) + ((y - 100) * (y - 100)));
    const distanseYellowStar = Math.sqrt(((x - 275) * (x - 275)) + ((y - 100) * (y - 100)));
    const distanseRedStar = Math.sqrt(((x - 375) * (x - 375)) + ((y - 100) * (y - 100)));
    const distanseBlueStar = Math.sqrt(((x - 475) * (x - 475)) + ((y - 100) * (y - 100)));

    if (distanseBlackStar < 30) {
      canvasObj2.style.background = 'black'
    } else if (distanseGreenStar < 30) {
      canvasObj2.style.background = 'green'
    } else if (distanseYellowStar < 30) {
      canvasObj2.style.background = 'yellow'
    } else if (distanseRedStar < 30) {
      canvasObj2.style.background = 'red'
    } else if (distanseBlueStar < 30) {
      canvasObj2.style.background = 'blue'
    } else {
      canvasObj2.style.background = 'white'
    }
  }

  useEffect(() => {
    const canvasObj = canvasRef.current;
    const ctx = canvasObj.getContext('2d');
    drawStar(ctx, 75, 100, 5, 30, 15, 'black');
    drawStar(ctx, 175, 100, 5, 30, 15, 'green');
    drawStar(ctx, 275, 100, 5, 30, 15, 'yellow');
    drawStar(ctx, 375, 100, 5, 30, 15, 'red');
    drawStar(ctx, 475, 100, 5, 30, 15, 'blue');
  }, [])

  return (
    <div>
      <canvas ref={canvasRef} width='600px' height='600px'
        style={{ display: 'flex' }}
        onClick={handlerUpdateColor} />
      <canvas ref={canvasRef2} width='600px' height='50px' />
    </div>
  )
}

export default Canvas
