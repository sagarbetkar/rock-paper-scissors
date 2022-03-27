import React from "react";
import { Button } from "react-bootstrap";

export default function GameMode({ handleGameMode }) {
  return (
    <Button className="m-4" onClick={() => handleGameMode()}>
      Change Mode
    </Button>
  );
}
