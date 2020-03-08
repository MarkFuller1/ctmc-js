import React from "react";
import {getGeneralData} from "../API/Requests";
import {Table, TableBody, TableCell, TableHead, TableRow} from '@material-ui/core';
import { observer } from 'mobx-react';

/*async function getColumns(cols){
  /*let colRows;
  console.log("IN GETCOLS : " + cols);

  if(cols === null){
    return null;
  }

  for (let i = 0; i < cols.colnames.length; i++){
    console.log("IN GETCOLS : " + cols.colnames[i]);
      colRows.push(
        <TableCell>{cols.colnames[i]}</TableCell>
      )
  }
  return colRows;
  console.log(cols.colnames[0]);
  return cols.colnames[0];
}*/

const StatsTable = observer(class StatsTable extends React.Component{
  Tabledata;

  render(){
    return (
      <div>
        <h1></h1>
        <Table>
          <TableHead>
            <TableRow>
              
            </TableRow>
          </TableHead>
        </Table>
      </div> 
    )
  }
  async componentDidMount(){
    const response = await getGeneralData(this.props.queryIndex);
    this.Tabledata = response;

    console.log(this.Tabledata);
  }
});

export default StatsTable;