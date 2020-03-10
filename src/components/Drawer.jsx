
import React from 'react';
import PropTypes from 'prop-types';
import { Drawer, IconButton } from '@material-ui/core/';
import MenuIcon from '@material-ui/icons/Menu';
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
        <IconButton onClick={this.handleDrawerOpen} edge="start">\
          <MenuIcon />
        </IconButton>

        <Drawer variant="persistent" anchor="left" open={this.state.open}>
          <IconButton onClick={this.handleDrawerClose}>\
          <MenuIcon />
          </IconButton>
        </Drawer>

      </div>
    );
  }
});


export default ResponsiveDrawer;
