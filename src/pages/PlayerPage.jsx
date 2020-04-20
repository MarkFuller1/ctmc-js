import React from "react";
import CreateTable from "../components/StatsTable";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import { observer } from '../../node_modules/mobx-react/dist';
import { withRouter } from 'react-router-dom';
import GraphicEqSharpIcon from '@material-ui/icons/GraphicEqSharp';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import * as Request from "../API/Requests";
import ResponsiveDrawer from '../components/Drawer';
import { IconButton, Tabs, Tab, Grid, Box } from "@material-ui/core";
import GeneralPlayerStats from '../components/GeneralPlayerStats';

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}


const PlayerPage = observer(class PlayerPage extends React.Component {

  constructor(props) {
    super();
    this.state = {
      name: "",
      generalData: [],
      generalCols: [],
      imageURL: "",
      value: 0,
    }
  }

  handleChange = (event, val) => {
    this.setState({ value: val });
  }

  render() {
    return (
      <div>
        <IconButton style={{ float: "right", top: "1vh" }} onClick={() => this.props.history.push("/")} >
          <GraphicEqSharpIcon />
        </IconButton>
        <ResponsiveDrawer />
        <Grid container direction="column" justify="center" alignItems="center" style={{ left: "0", width: "auto" }}>

          <Grid item>
            <img src={this.state.imageURL} alt="img" />
          </Grid>
          <Grid item>
            <Typography variant="h3">{this.state.name}</Typography>
          </Grid>
          <Grid item>
            <Typography>Place Badges here</Typography>
          </Grid>
          <div style={{ width: "80vw" }}>
            <Grid style={{ marginTop: "3vh" }}>
              <ExpansionPanel style={{ overflowX: "scroll", width: "100%" }}>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content" id="panel1a-header">
                  <Typography>
                    About
              </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <CreateTable rows={this.state.generalData} cols={this.state.generalCols} />
                </ExpansionPanelDetails>
              </ExpansionPanel>
            </Grid>

            <Grid item>
              <Tabs value={this.state.value} onChange={this.handleChange} centered style={{ width: "80vw" }}>
                <Tab label="General" {...a11yProps(0)} />
                <Tab label="Batting" {...a11yProps(1)} />
                <Tab label="Pitching" {...a11yProps(2)} />
                <Tab label="Fielding" {...a11yProps(3)} />
              </Tabs>
            </Grid>


            <TabPanel value={this.state.value} index={0}>
              Place stats concerning overall wins, teams, parks, play time, salary
              <GeneralPlayerStats playerID={this.props.match.params.playerid}/>
            </TabPanel>

            <TabPanel value={this.state.value} index={1}>
              Place stats concerning batting
            </TabPanel>

            <TabPanel value={this.state.value} index={2}>
              Place stats concerning Pitching
            </TabPanel>

            <TabPanel value={this.state.value} index={3}>
              Place stats concering Fielding
            </TabPanel>

          </div>
        </Grid>
      </div>
    );
  }

  async componentDidMount() {
    const genResponse = await Request.getGeneralData(this.props.match.params.playerid);
    const imageURLResponse = await Request.getPlayerImage(this.props.match.params.playerid);

    this.setState({ imageURL: imageURLResponse[0].url });
    this.setState({ generalData: genResponse, generalCols: Object.keys(genResponse[0]) });
    this.setState({ name: genResponse[0].nameFirst + " " + genResponse[0].nameLast });
  }
})

export default withRouter(PlayerPage);