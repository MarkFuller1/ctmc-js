import * as Requests from "../API/Requests";
import CreateTable from "./StatsTable";
import Typography from "@material-ui/core/Typography";
import React, { useEffect } from 'react';
import logo from '../resources/data-analytics.png';  
import { observer } from 'mobx-react'; 

const MainContent = observer (class MainContent extends React.Component {

  constructor(props){
    super();

    this.state = {
      tableRows: [],
      tableCols: []
    }
  }

  render (){
    return (
      <h1>
        <center>
        <img src={logo} style={{width: '15vw', height: '15vh' }}/>  
        </center>
          <Typography>Players with their birthday today!</Typography>
          <CreateTable rows={this.state.tableRows} cols={this.state.tableCols} />
      </h1>
    );
  }

  async componentDidMount(){
    const response = await Requests.getBirthdayBoys();
    console.log(response);
    this.state.tableCols = Object.keys(response[0]);
    this.state.tableRows = response;

    this.setState({tableCols: this.state.tableCols, tableRows: this.state.tableRows});
  }
});

export default MainContent;
