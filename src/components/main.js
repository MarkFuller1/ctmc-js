import React from "react";
import SimpleTable from "./SimpleTable";
import * as Requests from '../API/Requests'
import Combobox from './Combobox'

export default function Main(props) {
    console.log("getting batters")
    var batterNames = Requests.getAllBatters()
    console.log(batterNames);
    var [player, setPlayer] = React.useState(batterNames[0]);
    var batterRows = Requests.getAllColsFromBattingForPlayer(player)
    
  return (
    <div>
      "Hello"
      <Combobox names={batterNames} onChange={setPlayer}/>
      <SimpleTable rows={batterRows} />
    </div>
  );
}
