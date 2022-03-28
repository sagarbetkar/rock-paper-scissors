import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./App.css";
import Result from "./components/Result";
import Header from "./components/Header";
import Main from "./components/Main";

const rules = {
  rock: ["scissors"],
  scissors: ["paper"],
  paper: ["rock"],
};

const moves = ["rock", "paper", "scissors"];

const gameMode = {
  p_vs_c: {
    label: "PLAYER VS COMPUTER",
    player2Label: "COMPUTER",
    player1Label: "PLAYER",
  },
  c_vs_c: {
    label: "COMPUTER VS COMPUTER",
    player1Label: "COMPUTER 1",
    player2Label: "COMPUTER 2",
  },
};

function App() {
  const [playerOneMove, setPlayerOneMove] = useState(null);
  const [playerTwoMove, setPlayerTwoMove] = useState(null);
  const [winner, setWinner] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [mode, setMode] = useState(gameMode["p_vs_c"]);
  const [isTie, setIsTie] = useState(false);

  const handleOnClick = (move) => {
    setPlayerOneMove(move);
    setPlayerTwoMove(generatePlayerTwoMove());
  };

  // Return Random Move
  const generatePlayerTwoMove = () => {
    const randomSelect = moves[Math.floor(Math.random() * moves.length)];
    return randomSelect;
  };

  const resetGame = () => {
    setPlayerOneMove(null);
    setPlayerTwoMove(null);
    setWinner(null);
    setGameOver(false);
    setIsTie(false);
  };

  // Random move selection for computers
  const playComputer = () => {
    setPlayerOneMove(generatePlayerTwoMove());
    setPlayerTwoMove(generatePlayerTwoMove());
  };

  // Changing the Game Mode
  const toggleGameMode = () => {
    resetGame();
    mode.label === "PLAYER VS COMPUTER"
      ? setMode(gameMode["c_vs_c"])
      : setMode(gameMode["p_vs_c"]);
  };

  useEffect(() => {
    if (playerOneMove !== null && playerTwoMove !== null) {
      if (playerOneMove === playerTwoMove) {
        setWinner(null);
        setGameOver(false);
        setIsTie(true);
      } else if (rules[playerOneMove].some((x) => x === playerTwoMove)) {
        setWinner(mode.player1Label);
        setGameOver(true);
        setIsTie(false);
      } else {
        setWinner(mode.player2Label);
        setGameOver(true);
        setIsTie(false);
      }
      return winner;
    }
  }, [playerOneMove, playerTwoMove, winner, mode]);
  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <Header />
            <Main
              playerOneMove={playerOneMove}
              playerTwoMove={playerTwoMove}
              mode={mode}
              handleGameMode={toggleGameMode}
            />
            <Result
              mode={mode}
              moves={moves}
              gameOver={gameOver}
              winner={winner}
              handleOnClick={handleOnClick}
              reset={resetGame}
              handleComputersPlay={playComputer}
              isTie={isTie}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
