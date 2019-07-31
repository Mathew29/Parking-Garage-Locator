import React from 'react';
import Welcome from './Welcome';
import Error404 from './Error404';
import Leaflet from './Leaflet';
import { Switch, Route } from 'react-router-dom';
import fire from '../fire';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      garage: {}
    };
  }

  componentDidMount(){
    let garageRef = fire.database().ref('garage');
    garageRef.once('value').then(snapshot => {
      const newGarage = Object.assign({}, snapshot.val(), {
        id: snapshot.getKey()
      })
      console.log(snapshot.val());
      console.log(newGarage);
      this.setState({ garage: snapshot.val() });

      
      
    })
    
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Welcome} />
          <Route path='/map' render={() => <Leaflet parkingGarage={this.state.garage} />} />
          <Route component={Error404} />
        </Switch>
      </div>
    );  
  }

}

export default App;
