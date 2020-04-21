
import React from 'react';
import { Drawer, IconButton, Grid, Typography } from '@material-ui/core/';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleSharpIcon from '@material-ui/icons/AccountCircleSharp';
import { globalState } from '../states/state';
import { observer } from '../../node_modules/mobx-react/dist';

const ResponsiveDrawer = observer(class ResponsiveDrawer extends React.Component {

  constructor(props) {
    super();
    this.state = {
      open: false
    }
  }

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    //this.state.open = false;
    this.setState({ open: false });
  };

  render() {

    return (
      <div style={{ overflowX: "hidden" }}>
        <IconButton style={{ marginLeft: "2vw" }} onClick={this.handleDrawerOpen}>\
          <MenuIcon />
        </IconButton>

        <Drawer variant="persistent" anchor="left" open={this.state.open}>
        <div style={{overflowX: "hidden"}}>
          <Grid container direction="row" justify="flex-start" alignItems="center" spacing={3} style={{ overflowX: "hidden" }}>
            <Grid item>
                <IconButton style={{ width: "15vw" }}>
                  <AccountCircleSharpIcon />
                  {!globalState.userState.loggedIn &&
                    <Typography>Click to login</Typography>
                  }
                  {globalState.userState.loggedIn &&
                    <Typography>{globalState.userState.userName}</Typography>
                  }
                </IconButton>

                <IconButton onClick={this.handleDrawerClose}>
                  <MenuIcon />
                </IconButton>
            </Grid>
          </Grid>
          </div>
        </Drawer>

      </div>
    );
  }
});


export default ResponsiveDrawer;
