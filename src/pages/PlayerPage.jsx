import React from "react";
import CreateTable from "../components/StatsTable";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import { observer } from "../../node_modules/mobx-react/dist";
import { withRouter } from "react-router-dom";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import * as Request from "../API/Requests";
import ResponsiveDrawer from "../components/Drawer";

// const useStyles = makeStyles(theme => ({
//   root: {
//     width: "100%"
//   },
//   heading: {
//     fontSize: theme.typography.pxToRem(15),
//     fontWeight: theme.typography.fontWeightRegular
//   }
// }));

const PlayerPage = observer(
  class PlayerPage extends React.Component {
    //classes = useStyles();
    //playerImage = Request.getPlayerImage(this.props.match.params.playerid);

    constructor(props) {
      super();
      this.state = {
        name: "",
        generalData: [],
        generalCols: [],
        imageURL: ""
      };
    }

    render() {
      return (
        <center>
          <ResponsiveDrawer />
          <img src={this.state.imageURL} alt="img" />
          <Typography variant="h3">{this.state.name}</Typography>
          <div>
            <ExpansionPanel style={{ overflowX: "scroll", width: "70%" }}>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Player Stats Table</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <CreateTable
                  rows={this.state.generalData}
                  cols={this.state.generalCols}
                />
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </div>
        </center>
      );
    }

    async componentDidMount() {
      var genResponse = await Request.getGeneralData(
        this.props.match.params.playerid
      );
      genResponse =
        typeof genResponse[0] === undefined ||
        typeof genResponse[0] === "undefined"
          ? [{ invalidData: "error", nameFirst: "Server", NameLast: "Error" }]
          : genResponse;

      var imageURLResponse = await Request.getPlayerImage(
        this.props.match.params.playerid
      );
      imageURLResponse =
        typeof imageURLResponse[0] === undefined ||
        typeof imageURLResponse[0] === "undefined"
          ? [{ url: "" }]
          : imageURLResponse[0].url;

      this.setState({ imageURL: imageURLResponse });
      console.log(genResponse[0]);
      this.setState({
        generalData: genResponse,
        generalCols: Object.keys(genResponse[0])
      });
      console.log(genResponse);
      this.setState({
        name: genResponse[0].nameFirst + " " + genResponse[0].nameLast
      });
    }
  }
);

export default withRouter(PlayerPage);
