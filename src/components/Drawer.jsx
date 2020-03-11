
import React from 'react';
import { Drawer, IconButton } from '@material-ui/core/';
import MenuIcon from '@material-ui/icons/Menu';
import { observer } from '../../node_modules/mobx-react/dist';

const ResponsiveDrawer = observer(class ResponsiveDrawer extends React.Component {

  constructor(props) {
    super();
    this.state = {
      open: false
    }
  }

  handleDrawerOpen = () => {
    this.setState({open: true});
    this.setState({ open: this.state.open });
  };

  handleDrawerClose = () => {
    //this.state.open = false;
    this.setState({ open: false });
  };

  render() {

    return (
      <div>
        <IconButton style={{marginLeft: "2vw"}} onClick={this.handleDrawerOpen}>\
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
