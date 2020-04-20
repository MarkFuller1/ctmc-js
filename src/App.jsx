import React from 'react';
import { observer } from '../node_modules/mobx-react/dist';
//import { globalState, setAuthentication} from './states/state';
import Routes from './pages/Routes';

const App = observer(class App extends React.Component{
  render(){
    return(
      <div style={{width: "98vw", height: "98vh"}}>
        <Routes />
      </div>
    )
  }

});

export default App;
