import React from 'react';
import { withRouter } from 'react-router-dom';
import { observer } from '../../node_modules/mobx-react/dist';
import Main from '../components/main';

const Homepage = observer(function Homepage(props){
    return(
        <div>
            <Main />
        </div>
    )
})
export default withRouter(Homepage);