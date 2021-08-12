import React from "react";

const PlayAgain = (props) => (
  <div className="game-done">
    <div
      className="message"
      style={{ color: props.gameStatus === 'lost' ? 'red' : 'green' }}
    >
      {props.gameStatus === 'lost' ? 'Game Over!!' : 'Nice Job!'}
    </div>
    <button
      onClick={props.onClick}>Play Again!</button>
  </div>
)

export default PlayAgain;