import React from "react";
import * as Request from "./../API/Requests";
import StatsTable from "../components/StatsTable";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import { observer } from '../../node_modules/mobx-react/dist';
import { withRouter } from 'react-router-dom';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";


const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
}));

const PlayerPage = observer(function PlayerPage(props) {
  const classes = useStyles();
  var playerImage = Request.getPlayerImage(props.match.params.playerid);
  console.log("Player image: " + playerImage);

  return (
    <center>
      <img src={playerImage} alt="img" />
      <h1>{props.match.params.playerid}</h1>
      <div className={classes.root}>

        <ExpansionPanel>

          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content" id="panel1a-header">
            <Typography className={classes.heading}>
              Player Stats Table
            </Typography>
          </ExpansionPanelSummary>

          <ExpansionPanelDetails>
            <StatsTable queryIndex={props.match.params.playerid} />
          </ExpansionPanelDetails>

        </ExpansionPanel>
      </div>
    </center>
  );
})

export default withRouter(PlayerPage);