import React, { useEffect, useState } from 'react';
import StyledWrapper from './StyledWrapper';

const App = () => {
  const [topPosition, setTopPosition] = useState();
  const [leftPosition, setLeftPosition] = useState();

  const block_height = 30;
  const block_width = 30;

  const getRandomPosition = () => {
    let x = Math.round(Math.random()*(500-block_height));
    let y =  Math.round(Math.random()*(500-block_width));
    return [x, y]
  }

  useEffect(() => {
    let [x, y] = getRandomPosition();
    setTopPosition(x);
    setLeftPosition(y);
  }, [])

  const handleMouseEnter = () => {
    let [x, y] = getRandomPosition();
    setTopPosition(x);
    setLeftPosition(y);
  }


  return (
    <StyledWrapper>
      <div className="canvas">
        <div className="block" onMouseEnter={handleMouseEnter} style={{
          width: `${block_width}` + "px",
          height: `${block_height}`+ "px",
          backgroundColor: "red",
          position: "absolute",
          top: `${topPosition+"px"}`,
          left: `${leftPosition+"px"}`
        }}/>
      </div>
    </StyledWrapper>
  )
};
export default App;