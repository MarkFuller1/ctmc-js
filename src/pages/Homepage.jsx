import React from "react";
import { withRouter } from "react-router-dom";
import { observer } from "../../node_modules/mobx-react/dist";
import MiniDrawer from "./../components/Drawer"
const Homepage = observer(function Homepage(props) {
  return (
    <div>
        <MiniDrawer/>
    </div>
  );
});
export default withRouter(Homepage);
