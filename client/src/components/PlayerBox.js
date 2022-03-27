import React from "react";

export default function PlayerBox(props) {
  const { playerMove, rotateHand } = props;
  return (
    <div className="playerBox">
      {playerMove ? (
        <img
          className={rotateHand ? "user-hand p-2" : "computer-hand p-2"}
          src={`../images/${playerMove}.png`}
          alt=""
        />
      ) : (
        <span className="empty"></span>
      )}
    </div>
  );
}
