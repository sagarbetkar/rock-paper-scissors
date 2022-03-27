import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import GameMode from "./GameMode";
import PlayerBox from "./PlayerBox";

export default function Main(props) {
  const { playerOneMove, playerTwoMove, mode, handleGameMode } = props;
  return (
    <section className="my-5">
      <Container>
        <h5>
          {mode.player1Label} vs {mode.player2Label}
        </h5>
        <GameMode handleGameMode={handleGameMode} />
        <Row className="justify-content-md-center align-items-center">
          <Col xs lg="2">
            <PlayerBox rotateHand={true} playerMove={playerOneMove} />
          </Col>
          <Col md="auto">vs</Col>
          <Col xs lg="2">
            <PlayerBox playerMove={playerTwoMove} />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
