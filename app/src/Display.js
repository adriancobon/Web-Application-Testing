import React from 'react';

function Display(props) {
  return (
    <>
      <h1 data-testid="balls">Balls: {props.balls}</h1>
      <h1 data-testid="strikes">Strikes: {props.strikes}</h1>
    </>
  );
}

export default Display; 