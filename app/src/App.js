import React, { useState } from 'react';

import Display from './Display'
import Dashboard from './Dashboard'

import './App.css';

function App() {

  const [balls, setBalls] = useState(0);
  const [strikes, setStrikes] = useState(0);

  const strike = () => {
    if(strikes === 2) {
      setBalls(0);
      setStrikes(0);
    } else {
      setStrikes(strikes + 1);
    }
  }

  const ball = () => {
    if(balls === 3) {
      setBalls(0);
      setStrikes(0);
    } else {
      setBalls(balls + 1);
    }
  }

  const foul = () => {
    if(strikes === 2) {
      return strikes;
    } else {
      setStrikes(strikes + 1)
    }
  }

  const hit = () => {
    setStrikes(0);
    setBalls(0);
  }

  return (
    <div className="App">
      <Display 
        balls={balls}
        strikes={strikes}
      />
      <Dashboard 
        strike={strike}
        ball={ball}
        foul={foul}
        hit={hit}
      />
    </div>
  );
}

export default App;
