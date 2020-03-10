import * as Requests from "../API/Requests";
import CreateTable from "./StatsTable";
import CreateLinkedTable from './StatsTableWithLinks';
import React, { useEffect } from 'react';
import logo from '../resources/data-analytics.png';
import { observer } from 'mobx-react';
import { Paper, Typography } from "@material-ui/core";

const MainContent = observer(class MainContent extends React.Component {

  constructor(props) {
    super();

    this.state = {
      tableRows: [],
      tableCols: []
    }
  }

  render() {
    return (
      <div>
        <center>
          <img src={logo} style={{ width: '15vw', height: '15vh' }} />
        </center>
        <Paper style={{width: "20vw", height: "30vh", overflow: "hidden", overflowY: "scroll"}}>
          <Typography>Players with their birthday today!</Typography>
          <CreateLinkedTable rows={this.state.tableRows} cols={this.state.tableCols} />
        </Paper>

      </div>
    );
  }

  async componentDidMount() {
    const response = await Requests.getBirthdayBoys();
    let arr = Object.keys(response[0]);
    arr = arr.filter(e => e !== "playerid");
    this.state.tableCols = arr;
    this.state.tableRows = response;

    this.setState({ tableCols: this.state.tableCols, tableRows: this.state.tableRows });
  }
});

export default MainContent;
