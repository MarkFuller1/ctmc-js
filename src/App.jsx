import React from 'react';
import Homepage from './pages/Homepage';
import { observer } from '../node_modules/mobx-react/dist';
import { globalState, setAuthentication} from './states/state';
import Routes from './pages/Routes';

const App = observer(class App extends React.Component{
  render(){
    return(
      //!globalState.userState.isAuthenticating &&
      <div className="App">
        <Homepage />
        <Routes />
      </div>
    )
  }

  async componentDidMount(){
    //await validateSession();
    //setAuthentication(false);
    //window.addEventListener("resize", this.updateDimensions)
  }
});

export default App;
