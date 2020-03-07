import React from "react";
import * as Request from "./../API/Requests";

export default function PlayerStatsTable(props) {
  var playerData = Request.getGeneralData(props.tableData);
  console.log(playerData);
  return (
    <div>
      <table style={{width:"100%"}}>
        <tbody>
          <tr >
            <td >
            </td>
            <td>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
