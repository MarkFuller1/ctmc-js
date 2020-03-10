import * as Requests from "./../API/Requests";
import CreateTable from "../components/StatsTable";
import Typography from "@material-ui/core/Typography";
import React, { useEffect } from 'react';

export default function MainContent(props) {

  var [tableRows, setTableRows] = React.useState([]);
  var [tableCols, setTableCols] = React.useState([]);
  useEffect(() => {
    async function fetchData() {
        try {
            let bboys = await Requests.getBirthdayBoys();
            setTableRows(bboys);
            setTableCols(Object.keys(bboys[0]))
        } catch (e) {
            console.error(e);
        }
    };
    fetchData();
}, []);

  return (
    <h1>
      <center>
        Coach Took My Cup
      </center>
        <Typography>Players with their birthday today!</Typography>
        <CreateTable rows={tableRows} cols={tableCols} />
    </h1>
  );
}
