
import './style/App.scss';

import {RandomQoute} from './p1';
import { MarkDown } from './p2';
import { DrumMachine } from './p3';
import { Calculater } from './p4';
import { FiveClock } from './p5';


import Navbar from './navbar/navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={RandomQoute} />
          <Route exact path='/MarkDown' component={MarkDown} />
          <Route exact path='/Drum' component={DrumMachine} />
           <Route exact path='/calculater' component={Calculater} />
            <Route exact path='/FiveClock' component={FiveClock} />
        </Switch>
      </Router>
       
      
    </div>
  );
}

export default App;
