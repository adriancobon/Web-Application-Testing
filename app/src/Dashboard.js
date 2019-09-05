import React from 'react';

function Dashboard(props) {
  return (
    <>
      <button onClick={() => props.strike()} data-testid="strike-btn">Strike</button>
      <button onClick={() => props.ball()} data-testid="ball-btn">Ball</button>
      <button onClick={() => props.foul()} data-testid="foul-btn">Foul</button>
      <button onClick={() => props.hit()} data-testid="hit-btn">Hit</button>
    </>
  );
}

export default Dashboard; 