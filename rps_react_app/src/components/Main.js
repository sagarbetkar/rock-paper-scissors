import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import GameMode from "./GameMode";
import PlayerBox from "./PlayerBox";

export default function Main(props) {
  const { playerOneMove, playerTwoMove, mode, handleGameMode } = props;
  return (
    <div>
      <Container>
        <h5>
          {mode.player1Label} vs {mode.player2Label}
        </h5>
        <GameMode handleGameMode={handleGameMode} />
        <Row className="align-items-center justify-content-center">
          <Col xs lg="2">
            <PlayerBox rotateHand={true} playerMove={playerOneMove} />
          </Col>
          <Col md="auto">vs</Col>
          <Col xs lg="2">
            <PlayerBox playerMove={playerTwoMove} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
