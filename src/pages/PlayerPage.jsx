import React from "react";
import * as Request from './../API/Requests'

export default function PlayerPage(props) {
    var playerImage = Request.getPlayerImage(props.match.params.playerid)
    console.log("Player image: " + playerImage)
  return (
    <center>
      <img src={playerImage} alt="img" />;
      <h1>{props.match.params.playerid}</h1>

    </center>
  );
}
