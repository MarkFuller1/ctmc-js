import React from "react";
import * as Requests from '../API/Requests';
import { PRIMARY } from "../index";

export default function Main(props) {
    console.log("getting batters")
    var batterNames = Requests.getAllBatters()
    console.log(batterNames);
    var [player, setPlayer] = React.useState(batterNames[0]);
    var batterRows = Requests.getAllColsFromBattingForPlayer(player)
    
  return (
    <div>
      
    </div>
  );
}
