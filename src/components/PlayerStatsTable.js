import React from "react";
import * as Request from "./../API/Requests";

function renderTableHeader(data) {
    var headers =  data.map( (col) => <th>{col}</th>);
    return <div>{headers}</div>
}

function renderTableData(data) {
    var data = data.map((col) => <td>{col}</td>)
    return data;
}

export default async function PlayerStatsTable(props) {
  var playerData = await Request.getGeneralData(props.tableData);
  console.log("playerdata => " +  playerData.generalData);
  return (
    <div>
      <table id="players">
        <tbody>
          <tr>{renderTableHeader(playerData.getGeneralData)}</tr>
          {renderTableData(playerData.getGeneralData)}
        </tbody>
      </table>
    </div>
  );
}
