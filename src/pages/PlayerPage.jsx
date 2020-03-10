import React from "react";
import CreateTable from "../components/StatsTable";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import { observer } from '../../node_modules/mobx-react/dist';
import { withRouter } from 'react-router-dom';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { getGeneralData } from "../API/Requests";


// const useStyles = makeStyles(theme => ({
//   root: {
//     width: "100%"
//   },
//   heading: {
//     fontSize: theme.typography.pxToRem(15),
//     fontWeight: theme.typography.fontWeightRegular
//   }
// }));


const PlayerPage = observer(class PlayerPage extends React.Component {
  //classes = useStyles();
  //playerImage = Request.getPlayerImage(this.props.match.params.playerid);

  constructor (props){
    super();
    this.state={
      name: "",
      generalData: [],
      generalCols: [],
      imageURL: "",
    }
  }

  render(){
    return (
      <center>
        <img src={this.state.imageURL} alt="img" />
        <Typography variant="h3">{this.state.name}</Typography>
        <div>
  
          <ExpansionPanel style={{overflowX: "scroll "}}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content" id="panel1a-header">
              <Typography>
                Player Stats Table
              </Typography>
            </ExpansionPanelSummary>
  
            <ExpansionPanelDetails>
              <CreateTable rows={this.state.generalData} cols={this.state.generalCols} />
            </ExpansionPanelDetails>
  
          </ExpansionPanel>
        </div>
      </center>
    );
  }

  async componentDidMount() {
    const genResponse = await getGeneralData(this.props.match.params.playerid);
    //ADD CALL TO GET IMAGE URL
    this.setState({imageURL: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTE5NTU2MzE2MzYzNjU0NjY3/babe-ruth-9468009-2-402.jpg"})
    this.setState({ generalData: genResponse, generalCols: Object.keys(genResponse[0])});
    console.log(genResponse);
    this.setState({name: genResponse[0].nameFirst + " " + genResponse[0].nameLast});

    console.log(this.state);
  }
})

export default withRouter(PlayerPage);