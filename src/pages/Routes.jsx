import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import { withRouter } from 'react-router-dom';
import { observer } from '../../node_modules/mobx-react/dist';
import Homepage from './Homepage';


const Routes = observer(class Routes extends React.Component{
    render(){
        return(
            <Switch>
                <Route path="/" exact render = {() => <Homepage/>} />{ /* Finally, catch all unmatched routes */ }
                <Route render = {() => <Redirect to = "/"/>} />
            </Switch>
        )
    }
});

export default withRouter(Routes);
