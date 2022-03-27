import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./App.css";

function App() {
  const [playerOneMove, setPlayerOneMove] = useState("rock");
  const [playerTwoMove, setplayerTwoMove] = useState("rock");
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

  const restartGame = () => {
    window.location.reload();
  };

  useEffect(() => {
    const rules = {
      rock: "scissors",
      scissors: "paper",
      paper: "rock",
    };
    if (playerOneMove === playerTwoMove) {
      setWinner("It's a tie!");
      setGameOver(true);
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
            <h1>Rock, Paper & Scissors</h1>
            <Container className="moves">
              <Row className="justify-content-md-center">
                <Col xs lg="2">
                  <div className="playerOneMove">
                    <img
                      className="user-hand"
                      src={`../images/${playerOneMove}.png`}
                      alt=""
                    />
                  </div>
                </Col>
                <Col md="auto">vs</Col>
                <Col xs lg="2">
                  <div className="playerTwoMove">
                    <img
                      className="user-hand"
                      src={`../images/${playerTwoMove}.png`}
                      alt=""
                    />
                  </div>
                </Col>
              </Row>
            </Container>
            <div className="button-div">
              {moves.map((move, index) => (
                <button
                  key={index}
                  className="button"
                  onClick={() => handleOnClick(move)}
                >
                  {move}
                </button>
              ))}
            </div>
            <div className="result">
              <h1>Winner : {winner}</h1>
            </div>
            <div>
              {gameOver && (
                <button onClick={() => restartGame()}>Restart</button>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
