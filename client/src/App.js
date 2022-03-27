import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  const [playerOneMove, setPlayerOneMove] = useState();
  const [playerTwoMove, setplayerTwoMove] = useState();
  const [winner, setWinner] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const moves = ["rock", "paper", "scissors"];

  const handleOnClick = (move) => {
    setPlayerOneMove(move);
    generatePlayerTwoMove();
  };

  const generatePlayerTwoMove = () => {
    const randomSelect = moves[Math.floor(Math.random() * moves.length)];
    setplayerTwoMove(randomSelect);
  };

  const resetGame = () => {
    window.location.reload();
  };

  useEffect(() => {
    const rules = {
      rock: "scissors",
      scissors: "paper",
      paper: "rock",
    };
    if (playerOneMove === playerTwoMove) {
      setWinner(null);
      setGameOver(false);
    } else if (rules[playerOneMove] === playerTwoMove) {
      setWinner("Player One");
      setGameOver(true);
    } else {
      setWinner("Computer");
      setGameOver(true);
    }
    return winner;
  }, [playerOneMove, playerTwoMove, winner]);
  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <Header />
            <Main playerOneMove={playerOneMove} playerTwoMove={playerTwoMove} />
            <Footer
              moves={moves}
              gameOver={gameOver}
              winner={winner}
              handleOnClick={handleOnClick}
              reset={resetGame}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
