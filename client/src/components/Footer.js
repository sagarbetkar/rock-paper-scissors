import React from "react";
import { Button } from "react-bootstrap";

export default function Footer(props) {
  const { gameOver, winner, handleOnClick, reset, moves } = props;
  return (
    <footer>
      <div className="m-4">
        {moves.map((move, index) => (
          <Button
            key={index}
            className="mx-2"
            onClick={() => handleOnClick(move)}
            disabled={gameOver}
          >
            {move.toUpperCase()}
          </Button>
        ))}
      </div>
      <div className="mb-4">{gameOver && <h1>Winner : {winner}</h1>}</div>
      <div>{gameOver && <Button onClick={() => reset()}>New Game</Button>}</div>
    </footer>
  );
}
