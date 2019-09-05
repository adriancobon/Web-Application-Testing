import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';
import App from './App';

describe('<App />', () => {

  it('renders balls and strikes at starting state of 0', () => {
    const app = render(<App />)
    const balls = app.getByTestId('balls');
    expect(balls.textContent).toBe('Balls: 0')
    const strikes = app.getByTestId('strikes');
    expect(strikes.textContent).toBe('Strikes: 0')
  });
  it('button functionality', () => {
    const app = render(<App />)
    const strikeBtn = app.getByTestId('strike-btn');
    const ballBtn = app.getByTestId('ball-btn');
    const foulBtn = app.getByTestId('foul-btn');
    const hitBtn = app.getByTestId('hit-btn');
    const balls = app.getByTestId('balls');
    const strikes = app.getByTestId('strikes');

    fireEvent.click(strikeBtn)
    expect(strikes.textContent).toBe('Strikes: 1');
    fireEvent.click(strikeBtn)
    expect(strikes.textContent).toBe('Strikes: 2');
    fireEvent.click(strikeBtn)
    expect(strikes.textContent).toBe('Strikes: 0');

    fireEvent.click(ballBtn)
    expect(balls.textContent).toBe('Balls: 1');
    fireEvent.click(ballBtn)
    expect(balls.textContent).toBe('Balls: 2');
    fireEvent.click(ballBtn)
    expect(balls.textContent).toBe('Balls: 3');
    fireEvent.click(ballBtn)
    expect(balls.textContent).toBe('Balls: 0');

    fireEvent.click(foulBtn)
    expect(strikes.textContent).toBe('Strikes: 1');
    fireEvent.click(foulBtn)
    expect(strikes.textContent).toBe('Strikes: 2');
    fireEvent.click(foulBtn)
    expect(strikes.textContent).toBe('Strikes: 2');

    fireEvent.click(hitBtn)
    expect(balls.textContent).toBe('Balls: 0');
    expect(strikes.textContent).toBe('Strikes: 0');
  })
})