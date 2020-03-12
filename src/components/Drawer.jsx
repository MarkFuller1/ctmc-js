
import React from 'react';
import PropTypes from 'prop-types';
import { Drawer, IconButton, Grid } from '@material-ui/core/';
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
    this.state.open = true;
    this.setState({ open: this.state.open });
    console.log(this.state);
  };

  handleDrawerClose = () => {
    //this.state.open = false;
    this.setState({ open: false });
  };

  render() {

    return (
      <div>
        <IconButton style={{ marginLeft: "2vw" }} onClick={this.handleDrawerOpen}>\
          <MenuIcon />
        </IconButton>

        <Drawer variant="persistent" anchor="left" open={this.state.open}>
          <Grid container direction="row" justify="center" alignItems="center" spacing={3}>
            <Grid item>
              <IconButton style={{width: "15vw"}}>
                {globalState.userState.userName}
                /<AccountCircleSharpIcon />
              </IconButton>

              <IconButton onClick={this.handleDrawerClose}>
                /<MenuIcon />
              </IconButton>
            </Grid>

          </Grid>

        </Drawer>

      </div>
    );
  }
});


export default ResponsiveDrawer;
