import React from "react";
import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import { observer } from 'mobx-react';

function RenderTableHead(props) {
  
  console.disableRedBox = true;
  console.log(props.cols);
  if (props.cols.length <= 0) {
    return (
      <TableCell>""</TableCell>
    );
  } else {
    const colNames = props.cols;

    const elements = colNames.map((colName) =>
      <TableCell key={colName}>{colName}</TableCell>
    );
    
    return (
      <TableRow>
          {elements}
      </TableRow>
    )
  }
}

function RenderTableBody(props) {
  console.disableRedBox = true;
  console.log(props.rows);
  if (props.rows.length <= 0) {
    return (
      <TableCell>""</TableCell>
    );
  } else {
    const r = props.rows;
    console.log(r);
    let arry = [];

    for (let i = 0; i < props.rows.length; i++){
      console.log(r[i]);
      const row = Object.values(props.rows[i]);
      const elements = row.map((data) =>
      <TableCell key={data}>{data}</TableCell>
    );
      arry.push(
        <TableRow>
          {elements}
        </TableRow>
      )
    }
    
    return (
      <TableBody>
        {arry}
      </TableBody>
    )
  }
}

const StatsTable = observer(class StatsTable extends React.Component {
  
  constructor (props){
    super();
    this.state= {
      cols: [],
      rows: []
    }
  }

  render() {
    return (
      <div>
        <h1></h1>
        <Table style={{width: '100%'}}>
          <TableHead>
            <RenderTableHead cols={this.state.cols} />
          </TableHead>
          <RenderTableBody rows={this.state.rows} />
        </Table>
      </div>
    )
  }
  componentDidMount(){
    console.log("MOUNTED STATS TABLE");
    console.log(this.props);

    this.state.cols = this.props.cols;
    this.state.rows = this.props.rows;
    this.setState({cols: this.state.cols, rows: this.state.rows});
    console.log(this.state);
  }
  
});

export default function CreateTable(props){
  console.log("in create table: " + props.cols);
  if (props.cols.length !== 'undefined' && props.cols.length > 0){
    return (
      <StatsTable rows={props.rows} cols={props.cols}/>
    );
  } else {
    return (
      <div>
      </div>
    );
  }
}


//export default StatsTable;