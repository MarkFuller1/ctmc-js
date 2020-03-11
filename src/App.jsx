import React from 'react';
import { observer } from '../node_modules/mobx-react/dist';
import Routes from './pages/Routes';
import P5Wrapper from "./sketch/p5-wrapper";
import sketch from "./sketch/sketch"

const App = observer(class App extends React.Component{
  render(){
    return(
      <div>
        <P5Wrapper sketch={sketch}>
        <div style={{ position: "relative" }}>
          <Routes />
        </div>
        </P5Wrapper>
      </div>
    )
  }

});

export default App;
