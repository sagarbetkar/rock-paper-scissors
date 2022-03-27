import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PlayerBox from "./PlayerBox";

export default function Main(props) {
  return (
    <main>
      <Container className="my-5">
        <Row className="justify-content-md-center align-items-center">
          <Col xs lg="2">
            <PlayerBox rotateHand={true} playerMove={props.playerOneMove} />
          </Col>
          <Col md="auto">vs</Col>
          <Col xs lg="2">
            <PlayerBox playerMove={props.playerTwoMove} />
          </Col>
        </Row>
      </Container>
    </main>
  );
}
