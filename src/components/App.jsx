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

  componentWillMount(){
    let garageRef = fire.database().ref('garage').orderByKey().limitToLast(100);
    garageRef.on('child_added', snapshot => {
      console.log(snapshot.val());

      // let parking = {parkingOne: snapshot.val()};
      // let garages = { lat: snapshot.val(), lng: snapshot.val(), street: snapshot.val(), city: snapshot.val(), state: snapshot.val(), zip: snapshot.val() };
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
