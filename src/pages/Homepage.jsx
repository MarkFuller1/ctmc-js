import React from "react";
import { withRouter } from "react-router-dom";
import { observer } from "../../node_modules/mobx-react/dist";
import ResponsiveDrawer from "./../components/Drawer";
import MainContent from '../components/MainContent';

const Homepage = observer(function Homepage(props) {

  return (
    <div>
      <ResponsiveDrawer />
      <MainContent />
    </div>
  );
});
export default withRouter(Homepage);
