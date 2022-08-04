// useState: tic tac toe
// http://localhost:3000/isolated/exercise/04.js

import React, { useState } from 'react'

function Board() {
  // 🐨 squares is the state for this component. Add useState for squares
  const generateInitialSquares = () => Array(9).fill(null);
  const [squares, setSquares] = useState(generateInitialSquares);
  const [nextValue, setNextValue] = useState(calculateNextValue(squares)); // does this need to be state? todochan
        // and i really dont want to call generateInitialSquares twice for the same array, but if i do it once imperitively, it will be created on every render
        // what happens if I set it to "squares" here?
  const [gameWon, setGameWon] = useState(false);
  const [errorState, setErrorState] = useState('');

  function selectSquare(square) {
    if (squares[square] !== null) {
      setErrorState('Tried to select an occupied square idiot!');
      return;
    }
    if (gameWon) {
      setErrorState('You cant keep playing after the game is over idiot!');
      return;
    }
    setErrorState(null);
    const newSquares = [...squares];
    newSquares[square] = nextValue;
    setSquares(newSquares);
    setGameWon(calculateWinner(newSquares));
    setNextValue(calculateNextValue(newSquares)); // TODOCHAN
  }

  function restart() {
    setSquares(generateInitialSquares());
    setNextValue(calculateNextValue(generateInitialSquares()));
    setGameWon(false);
  }

  function renderSquare(i) {
    return (
      <button className="square" onClick={() => selectSquare(i)}>
        {squares[i]}
      </button>
    )
  }

  return (
    <div style={{'justifyContent': 'center', alignItems: 'center', display: 'flex', flexDirection: 'column'}}>
      <div className="status">{errorState ? errorState : calculateStatus(gameWon, squares, nextValue)}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
      <button className="restart" onClick={restart}>
        restart
      </button>
    </div>
  )
}

function Game() {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
    </div>
  )
}

// eslint-disable-next-line no-unused-vars
function calculateStatus(winner, squares, nextValue) {
  return winner
    ? `Winner: ${winner}`
    : squares.every(Boolean)
    ? `Scratch: Cat's game`
    : `Next player: ${nextValue}`
}

// eslint-disable-next-line no-unused-vars
function calculateNextValue(squares) {
  return squares.filter(Boolean).length % 2 === 0 ? 'X' : 'O'
}

// eslint-disable-next-line no-unused-vars
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }
  return null
}

function App() {
  return <Game />
}

export default App
