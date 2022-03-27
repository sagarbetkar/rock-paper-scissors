import React from "react";
import { Button } from "react-bootstrap";

export default function Footer(props) {
  const {
    gameOver,
    winner,
    handleOnClick,
    reset,
    moves,
    mode,
    handleComputersPlay,
  } = props;
  return (
    <footer className="p-2">
      {mode.label === "PLAYER VS COMPUTER" ? (
        <div className="m-2">
          {moves.map((move, index) => (
            <Button
              key={index}
              className="m-2"
              onClick={() => handleOnClick(move)}
              disabled={gameOver}
            >
              {move.toUpperCase()}
            </Button>
          ))}
        </div>
      ) : (
        <div className="m-2">
          <Button onClick={() => handleComputersPlay()} disabled={gameOver}>
            Play
          </Button>
        </div>
      )}
      {gameOver && <h1 className="m-0">Winner : {winner}</h1>}
      {gameOver && (
        <Button className="my-2" onClick={() => reset()}>
          New Game
        </Button>
      )}
    </footer>
  );
}
