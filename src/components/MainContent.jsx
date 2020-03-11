import * as Requests from "../API/Requests";
import CreateLinkedTable from './StatsTableWithLinks';
import React from 'react';
import logo from '../resources/data-analytics.png';
import { observer } from 'mobx-react';
import { Paper, Typography, Grid, InputBase } from "@material-ui/core";
import { fade, withStyles } from '@material-ui/core/styles';
import { PRIMARY } from "..";

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(PRIMARY, 0.15),
    '&:hover': {
      backgroundColor: fade(PRIMARY, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 1),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '20vw',
      '&:focus': {
        width: '30vw',
      },
    },
  },
});

const MainContent = observer(class MainContent extends React.Component {

  constructor(props) {
    super();

    this.state = {
      tableRows: [],
      tableCols: []
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Grid container direction="column" justify="center" alignItems="center" spacing={7}>
          <Grid item>
            <img alt="mainimg" src={logo} style={{ width: '15vw', height: '15vh' }} />
          </Grid>
          <Grid item>
            <div className={classes.search}>
              <InputBase placeholder="Search" 
              classes={{input: classes.inputInput, root: classes.inputRoot}} />
            </div>
          </Grid>
          <Grid>
            <Paper style={{ width: "20vw", height: "30vh", overflow: "hidden", overflowY: "scroll" }}>
              <Typography>Players with their birthday today!</Typography>
              <CreateLinkedTable rows={this.state.tableRows} cols={this.state.tableCols} />
            </Paper>
          </Grid>

        </Grid>


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

export default withStyles(styles)(MainContent);
