import React from "react";
import { Button } from "react-bootstrap";

export default function Result(props) {
  const {
    gameOver,
    winner,
    handleOnClick,
    reset,
    moves,
    mode,
    handleComputersPlay,
    isTie,
  } = props;
  return (
    <div className="mt-4">
      {mode.label === "PLAYER VS COMPUTER" ? (
        <div className="d-flex justify-content-center align-items-center">
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
        <div>
          <Button
            className="m-2"
            onClick={() => handleComputersPlay()}
            disabled={gameOver}
          >
            Play
          </Button>
        </div>
      )}
      <div style={{ height: "150px" }}>
        {gameOver && <h1 className="m-0">Winner : {winner}</h1>}
        {isTie && <h1 className="m-0">It's a tie</h1>}
        {gameOver && (
          <Button className="my-2" onClick={() => reset()}>
            New Game
          </Button>
        )}
      </div>
    </div>
  );
}
